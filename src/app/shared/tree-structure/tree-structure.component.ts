import { Component, Injectable, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { of as ofObservable, Observable, BehaviorSubject } from 'rxjs';


/**
 * Node for to-do item
 */
export class TodoItemNode {
  children: TodoItemNode[];
  item: string;
  level: number[];
  id: number[];
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
const TREE_DATA = [{
  "children": [{
    "children": [{
      "children": [],
      "item": "3D Printing Manufactures",
      "id": [1, 0, 1, 2]
    }, {
      "children": [],
      "item": "3D Printing Material",
      "id": [1, 0, 1, 4]
    }],
    "item": "Hardware",
    "id": [1, 0, 1]
  },
  {
    "children": [{
      "children": [],
      "item": "3D Scanner",
      "id": [1, 0, 7, 6]
    }],
    "item": "Hardware + Software",
    "id": [1, 0, 7]
  },
  {
    "children": [{
      "children": [],
      "item": "3D Printing CAD Software",
      "id": []
    }],
    "item": "Software",
    "id": [1, 0, 8]
  }
  ],
  "item": "3D Printing",
  "id": [1]
},
{
  "children": [{
    "children": [{
      "children": [],
      "item": "Image Recognition",
      "id": [2, 0, 43, 49]
    }],
    "item": "Computer Vision",
    "id": [2, 0, 43]
  },
  {
    "children": [{
      "children": [],
      "item": "Speech Recognition",
      "id": [2, 0, 54, 60]
    },
    {
      "children": [],
      "item": "Text Analysis",
      "id": [2, 0, 54, 62]
    }
    ],
    "item": "Natural Language Processing",
    "id": [2, 0, 54]
  },
  {
    "children": [{
      "children": [{
        "children": [],
        "item": "Cyber Security",
        "id": [2, 0, 40, 940, 44]
      }, {
        "children": [],
        "item": "Marketing",
        "id": [2, 0, 40, 940, 53]
      }],
      "item": "Functional Application",
      "id": [2, 0, 40, 940]
    }],
    "item": "Application",
    "id": [2, 0, 40]
  }
  ],
  "item": "Artificial Intelligence",
  "id": [2]
}, {
  "children": [],
  "item": "Big Data & Analytics",
  "id": [3]
},
{
  "children": [],
  "item": "Other",
  "id": [99]
}
]


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
    // const data = this.buildFileTree(TREE_DATA, 0, [],0,0);
    const data = this.buildFileTree(TREE_DATA, []);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `TodoItemNode`.
   */

  /**
* Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
* The return value is the list of `TodoItemNode`.
*/
  buildFileTree(arr = [], lvl = []) {
    return arr.map((val, idx) => ({
      item: val.item,
      id: val.id,
      children: this.buildFileTree(val.children, [...lvl, idx]),
      level: [...lvl, idx]
    }));
  }
  /** Add an item to to-do list */
  insertItem(parent: TodoItemNode, name: string) {
    console.log("the parent got is ", parent);
    console.log("The parent id is ", parent.id);
    // let tempId: number[] = parent.id;
    // console.log("the temp id is ", tempId);
    // let newNodeId:number[] = Object.assign([], tempId);
    // console.log("The copy is ", newNodeId)
    // newNodeId.push(null);
    // console.log("The new node id is", newNodeId);
    if (parent.children.length > 1) {
      let lastAddedChildNode = parent.children[parent.children.length - 1]
      if (lastAddedChildNode.item === "") {
        //Do Nothing When the Previous Child is Empty
      } else {
        let level: number[] = Object.assign([], parent.level);
        let lastLevelOfChild = parent.children.length;
        level.push(lastLevelOfChild);
        const child = <TodoItemNode>{ item: name, id: parent.id, level: level, children: [] };
        if (parent.children) {
          parent.children.push(child);
          this.dataChange.next(this.data);
        }
      }
    } else {
      let level: number[] = Object.assign([], parent.level);
      let lastLevelOfChild = parent.children.length;
      level.push(lastLevelOfChild);
      const child = <TodoItemNode>{ item: name, id: parent.id, level: level, children: [] };
      if (parent.children) {
        parent.children.push(child);
        this.dataChange.next(this.data);
      }
    }


  }

  closeItem(parent: TodoItemNode) {
    let level: number[] = parent.level;
    // if(level.length>2){
    let parentNode = this.data[level[0]];
    console.log("The top parent node is ", parentNode);
    console.log("b4 shift ", level);
    level.shift();
    console.log("the level is ", level);
    for (let i = 0; i < level.length - 1; i++) {
      console.log("The parent node is ", parentNode)
      parentNode = parentNode.children[level[i]];
    }
    parentNode.children.splice(-1, 1);
    this.dataChange.next(this.data);
    console.log("After the slice the data is ", this.data);
    // }else{
    //   let parentNode = this.data[level[0]];
    //   console.log("When node is len 2",parentNode)
    //   parentNode.children.splice(-1,1);
    // }
    console.log("this . data ", this.data);
    this.dataChange.next(this.data);

  }
  editItem(parent: TodoItemNode, name: string) {
    const child = <TodoItemNode>{ item: name, id: parent.id };
    if (parent.children) {
      parent.children.push(child);
      this.dataChange.next(this.data);
    }
  }
  updateItem(node: TodoItemNode, name: string) {
    console.log("In the update method", node);
    node.item = name;
    this.dataChange.next(this.data);
    console.log("The updated node is ", node);
    console.log("The node item is :", node.item);
    console.log("the tech Id is ", node.id[0]);
    if (node.id.length > 1) {
      console.log("The parent id is ", node.id[node.id.length - 1]);
    }
  }
  deleteItem(parent: TodoItemNode, name: string) {

  }
}

@Component({
  selector: 'app-tree-structure',
  templateUrl: './tree-structure.component.html',
  styleUrls: ['./tree-structure.component.css'],
  providers: [ChecklistDatabase]
})
export class TreeStructureComponent implements OnInit {
  ngOnInit(): void {
  }
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
    console.log("time of adding", node);
    const parentNode = this.flatNodeMap.get(node);
    console.log("when add function is called the parent is ", parentNode)
    this.database.insertItem(parentNode!, '');
    this.treeControl.expand(node);
  }
  closeNode(node: TodoItemFlatNode) {
    console.log("The closing node is ", node)
    const parentNode = this.flatNodeMap.get(node);
    console.log("The closing parent node is ", parentNode);
    this.database.closeItem(parentNode);

  }

  /** Save the node to database */
  saveNode(node: TodoItemFlatNode, itemValue: string) {
    const nestedNode = this.flatNodeMap.get(node);
    this.database.updateItem(nestedNode!, itemValue);
  }
  deleteNode(node: TodoItemFlatNode) {
    console.log("deletion node is ", node)
    const parentNode = this.flatNodeMap.get(node);
    console.log("when add function is called the parent is ", parentNode)
    console.log("To delete the nodes ", parentNode.id);
  }
  editNode(node: TodoItemFlatNode) {
    console.log("time of adding", node);
    const parentNode = this.flatNodeMap.get(node);
    console.log("when add function is called the parent is ", parentNode)
    this.database.editItem(parentNode!, '');
    this.treeControl.expand(node);
  }
  submit() {
    console.log(this.database);
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at http://angular.io/license */