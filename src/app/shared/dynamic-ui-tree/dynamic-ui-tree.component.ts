import { Component, Injectable } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { of as ofObservable, Observable, BehaviorSubject } from 'rxjs';
import { leave } from '@angular/core/src/profile/wtf_impl';


/**
 * Node for to-do item
 */
export class TodoItemNode {
  children: TodoItemNode[];
  item: string;
  level: number[];
}

/** Flat to-do item node with expandable and level information */
export class TodoItemFlatNode {
  item: string;
  level: number;
  expandable: boolean;
}

/**
 * The Json object for to-do list data.
 */
const TREE_DATA ={
  "SportsTech": {
    "Fantasy Sports": {},
    "Sponsorship": {},
    "Sports Activity Booking": {},
    "Sports E-Commerce": {},
    "Online Sports Media": {
      "Video Platforms": {},
      "Content Platforms": {},
      "Livescores": {}
    },
    "Sports Management Software": {},
    "Analytics Providers": {}
  },
  "Cyber Security": {
    "Mobile Security": {
      "Mobile Device Management": {}
    },
    "Risk & Compliance": {},
    "Iot/ IIoT Security": {
      "Connected Devices": {},
      "Vehicle Security": {}
    },
    "Privacy": {},
    "Cloud Security": {},
    "Application Security": {
      "Web Application Security": {},
      "Vulnerability Assessment": {}
    },
    "Security Analytics": {},
    "Threat Intelligence": {
      "Threat Detection": {},
      "Behavioural Intelligence": {},
      "Fraud Detection": {}
    },
    "Transaction Security": {},
    "Data Security": {
      "Public Key Infrastructure (PKI)": {},
      "Encryption": {}
    },
    "Digital Rights Management": {},
    "Enterprise Security": {
      "Identity & Access Management": {
        "Biometrics": {}
      },
      "EndPoint Security": {
        "Endpoint protection": {},
        "Enterprise endpoints": {},
        "Endpoint threat detection & response": {}
      },
      "Infrastructure Security": {
        "Email Security": {},
        "Web Site Security": {},
        "Intrusion Prevention": {},
        "Network Visibility": {},
        "Continuous Network Visibility": {},
        "Unified Threat Management": {},
        "Network Firewall": {}
      },
      "Information Security": {}
    }
  },
  "Big Data & Analytics": {},
  "Other": {}
};

/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
@Injectable()
export class ChecklistDatabase {
  dataChange: BehaviorSubject<TodoItemNode[]> = new BehaviorSubject<TodoItemNode[]>([]);

  get data(): TodoItemNode[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
    //     file node as children.
    const data = this.buildFileTree(TREE_DATA, 0, [],0, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `TodoItemNode`.
   */
  buildFileTree(value: any, level: number,trackLevel:number[],previousTrackerLen,trackerIndex) {
    console.log("the level of the present node ",level);
    let data: any[] = [];
    for (let k in value) {
      let v = value[k];
      let node = new TodoItemNode();
      node.item = `${k}`;
      if(trackLevel.length-1 <= trackerIndex){
        let nodeLevel = trackLevel[trackerIndex]+1
        trackLevel[trackerIndex] = nodeLevel;
      }else{
        let nodeLevel = 0;
        trackLevel[trackerIndex] = nodeLevel
      }
      
      // trackLevel.push(level);
      // if(trackLevel.length == previousTrackerLen){

      // }else{
      //   trackLevel.pop();
      //   level = 0 ;
      //   trackLevel.push(level);
      // }
      node.level = trackLevel;
      
      if (v === null || v === undefined) {
        // no action
      } else if (typeof v === 'object') {
        node.children = this.buildFileTree(v, level + 1,trackLevel,trackLevel.length,trackerIndex+1);
        console.log("the node child is ",node.children);
      } else {
        node.item = v;
      }
      data.push(node);
      console.log("data pushed is ",data);
      // level = trackLevel[trackerIndex] +1
      // trackLevel.pop();
    }
    console.log(data);
    return data;
  }

  /** Add an item to to-do list */
  insertItem(parent: TodoItemNode, name: string) {
    const child = <TodoItemNode>{ item: name };
    if (parent.children) {
      parent.children.push(child);
      this.dataChange.next(this.data);
    }
  }

  updateItem(node: TodoItemNode, name: string) {
    node.item = name;
    this.dataChange.next(this.data);
  }
  deleteItem(parent:TodoItemNode, name:string){

  }
}

/**
 * @title Tree with checkboxes
 */
@Component({
  selector: 'app-dynamic-ui-tree',
  templateUrl: './dynamic-ui-tree.component.html',
  styleUrls: ['./dynamic-ui-tree.component.css'],
  providers: [ChecklistDatabase]
})
export class DynamicUiTreeComponent {
  /** Map from flat node to nested node. This helps us finding the nested node to be modified */
  flatNodeMap: Map<TodoItemFlatNode, TodoItemNode> = new Map<TodoItemFlatNode, TodoItemNode>();

  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  nestedNodeMap: Map<TodoItemNode, TodoItemFlatNode> = new Map<TodoItemNode, TodoItemFlatNode>();

  /** A selected parent node to be inserted */
  selectedParent: TodoItemFlatNode | null = null;

  /** The new item's name */
  newItemName: string = '';

  treeControl: FlatTreeControl<TodoItemFlatNode>;

  treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;

  dataSource: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;

  /** The selection for checklist */
  checklistSelection = new SelectionModel<TodoItemFlatNode>(true /* multiple */);

  constructor(private database: ChecklistDatabase) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
      this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<TodoItemFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    database.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });
  }

  getLevel = (node: TodoItemFlatNode) => { return node.level; };

  isExpandable = (node: TodoItemFlatNode) => { return node.expandable; };

  getChildren = (node: TodoItemNode): Observable<TodoItemNode[]> => {
    return ofObservable(node.children);
  }

  hasChild = (_: number, _nodeData: TodoItemFlatNode) => { return _nodeData.expandable; };

  hasNoContent = (_: number, _nodeData: TodoItemFlatNode) => { return _nodeData.item === ''; };

  /**
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
   */
  transformer = (node: TodoItemNode, level: number) => {
    let flatNode = this.nestedNodeMap.has(node) && this.nestedNodeMap.get(node)!.item === node.item
      ? this.nestedNodeMap.get(node)!
      : new TodoItemFlatNode();
    flatNode.item = node.item;
    flatNode.level = level;
    flatNode.expandable = !!node.children;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  }

  /** Whether all the descendants of the node are selected */
  descendantsAllSelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    return descendants.every(child => this.checklistSelection.isSelected(child));
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: TodoItemFlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);
  }

  /** Select the category so we can insert the new item. */
  addNewItem(node: TodoItemFlatNode) {
    console.log("time of adding",node);
    const parentNode = this.flatNodeMap.get(node);
    console.log("when add function is called the parent is ", parentNode)
    this.database.insertItem(parentNode!, '');
    this.treeControl.expand(node);
  }

  /** Save the node to database */
  saveNode(node: TodoItemFlatNode, itemValue: string) {
    const nestedNode = this.flatNodeMap.get(node);
    this.database.updateItem(nestedNode!, itemValue);
  }
  deleteNode(node:TodoItemFlatNode){
    const parentNode = this.flatNodeMap.get(node);
    console.log("when add function is called the parent is ", parentNode)
        console.log(node);
  }
  submit(){
    console.log(this.database);
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */