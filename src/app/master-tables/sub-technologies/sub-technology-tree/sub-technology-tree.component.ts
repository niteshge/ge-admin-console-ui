import {
  Component,
  Injectable,
  OnInit,
  Input,
  OnChanges,
  EventEmitter,
  Output
} from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlattener,
  MatTreeFlatDataSource
} from '@angular/material/tree';
import { of as ofObservable, Observable, BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material';
import { DynamicYesNoPopupComponent } from '../../../shared/dynamic-yes-no-popup/dynamic-yes-no-popup.component';
import { AlertBoxComponent } from '../../../shared/alert-box/alert-box.component';
import { DynamicTableEditComponent } from '../../../shared/dynamic-table-edit/dynamic-table-edit.component';
import { SubTechnologyTableEditComponent } from '../sub-technology-table-edit/sub-technology-table-edit.component';
import { BusinessTractionAndIndustryDisruptionService } from '../../../core/business-traction-and-industry-disruption.service';
import { SubTechnologyTableAddComponent } from '../sub-technology-table-add/sub-technology-table-add.component';

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

@Component({
  selector: 'app-sub-technology-tree',
  templateUrl: './sub-technology-tree.component.html',
  styleUrls: ['./sub-technology-tree.component.css']
})
export class SubTechnologyTreeComponent implements OnInit {
  @Input()
  TREEDATA = [];
  // @Output() newnode = new EventEmitter();
  @Output()
  action = new EventEmitter();
  constructor(public dialog: MatDialog) {
    this.initialize();
    this.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });
  }
  ngOnInit() {
    console.log(this.TREEDATA);
    this.initialize();
  }
  ngOnChanges(): void {
    this.initialize();
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren
    );
    this.treeControl = new FlatTreeControl<TodoItemFlatNode>(
      this.getLevel,
      this.isExpandable
    );
    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      this.treeFlattener
    );
    this.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });
    // this.dataSource.data = this.data;
  }
  dataChange: BehaviorSubject<TodoItemNode[]> = new BehaviorSubject<
    TodoItemNode[]
  >([]);
  get data(): TodoItemNode[] {
    return this.dataChange.value;
  }
  initialize() {
    // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
    // file node as children.
    console.log(this.TREEDATA);
    const data = this.buildFileTree(this.TREEDATA, []);

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
  /** Map from flat node to nested node. This helps us finding the nested node to be modified */
  flatNodeMap: Map<TodoItemFlatNode, TodoItemNode> = new Map<
    TodoItemFlatNode,
    TodoItemNode
  >();

  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  nestedNodeMap: Map<TodoItemNode, TodoItemFlatNode> = new Map<
    TodoItemNode,
    TodoItemFlatNode
  >();

  /** A selected parent node to be inserted */
  selectedParent: TodoItemFlatNode | null = null;

  /** The new item's name */
  newItemName: string = '';

  treeControl: FlatTreeControl<TodoItemFlatNode>;

  treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;

  dataSource: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;

  /** The selection for checklist */
  checklistSelection = new SelectionModel<TodoItemFlatNode>(
    true /* multiple */
  );

  getLevel = (node: TodoItemFlatNode) => {
    return node.level;
  };

  isExpandable = (node: TodoItemFlatNode) => {
    return node.expandable;
  };

  getChildren = (node: TodoItemNode): Observable<TodoItemNode[]> => {
    return ofObservable(node.children);
  };

  hasChild = (_: number, _nodeData: TodoItemFlatNode) => {
    return _nodeData.expandable;
  };

  hasNoContent = (_: number, _nodeData: TodoItemFlatNode) => {
    return _nodeData.item === '';
  };

  /**
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
   */
  transformer = (node: TodoItemNode, level: number) => {
    let flatNode =
      this.nestedNodeMap.has(node) &&
      this.nestedNodeMap.get(node)!.item === node.item
        ? this.nestedNodeMap.get(node)!
        : new TodoItemFlatNode();
    flatNode.item = node.item;
    flatNode.level = level;
    flatNode.expandable = !!node.children;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  };

  /** Whether all the descendants of the node are selected */
  descendantsAllSelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    return descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child =>
      this.checklistSelection.isSelected(child)
    );
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

  /** Add an item to to-do list */
  insertItem(parent: TodoItemNode, name: string) {
    console.log('the parent got is ', parent);
    console.log('The parent id is ', parent.id);
    if (parent.children.length > 1) {
      let lastAddedChildNode = parent.children[parent.children.length - 1]; //To add after the last node of the parent(which is the new node/child should be added in the last of row in the children)
      if (lastAddedChildNode.item === '') {
        //Do Nothing When the Previous Child is Empty
      } else {
        let level: number[] = Object.assign([], parent.level);
        let lastLevelOfChild = parent.children.length; //Get the lenght of the children which gives you the last index level for the new node
        level.push(lastLevelOfChild);
        const child = <TodoItemNode>{
          item: name,
          id: parent.id,
          level: level,
          children: []
        };
        console.log('The child new empty field is ', child);
        if (parent.children) {
          parent.children.push(child);
          this.dataChange.next(this.data);
        }
      }
    } else {
      let level: number[] = Object.assign([], parent.level);
      let lastLevelOfChild = parent.children.length;
      level.push(lastLevelOfChild);
      const child = <TodoItemNode>{
        item: name,
        id: parent.id,
        level: level,
        children: []
      };
      console.log('The child new empty field is ', child);
      if (parent.children) {
        parent.children.push(child);
        this.dataChange.next(this.data);
      }
    }
  }

  closeItem(parent: TodoItemNode) {
    let level: number[] = parent.level;
    let parentNode = this.data[level[0]];
    console.log('The top parent node is ', parentNode);
    console.log('b4 shift ', level);
    level.shift();
    console.log('the level is ', level);
    for (let i = 0; i < level.length - 1; i++) {
      console.log('The parent node is ', parentNode);
      parentNode = parentNode.children[level[i]];
      console.log('Temp parent node ', parentNode);
    }
    console.log("to close the parent's child ", parentNode);
    parentNode.children.splice(-1, 1);
    this.dataChange.next(this.data);
    console.log('After the slice the data is ', this.data);
    console.log('this . data ', this.data);
    this.dataChange.next(this.data);
  }

  updateItem(node: TodoItemNode, name: string) {
    console.log('In the update method', node);
    node.item = name;
    // Emit the new node
    // this.emitNode(node, 1);
    this.dataChange.next(this.data);
    return node;
    // Enable only if you no how to update after the response is succesful message is taken
  }
  deleteItem(parent: TodoItemNode, name: string) {
    // TODO: slice only that node once the response is successful on deleting
  }
  /** Select the category so we can insert the new item. */
  addNewItem(node: TodoItemFlatNode) {
    console.log('time of adding', node);
    const parentNode = this.flatNodeMap.get(node);
    console.log('when add function is called the parent is ', parentNode);
    // this.insertItem(parentNode!, '');
    let addItem = {};
    let techIdList = [];
    techIdList = parentNode.id;
    let horizontalId: number = techIdList[0];
    let technologySegmentId: number = techIdList[techIdList.length - 1];
    addItem['TECH ID'] = horizontalId;
    addItem['TECH SUB ID'] = technologySegmentId;
    addItem['LEVEL'] = node.level;
    let dialogEdit = this.dialog.open(SubTechnologyTableAddComponent, {
      width: '1500px',
      height: '700px',
      data: addItem
    });
    dialogEdit.afterClosed().subscribe(result => {
      let addNodeData: TodoItemNode = Object.assign(parentNode);
      let updatedNodeData: TodoItemNode = this.updateItem(
        addNodeData,
        result['TECHNOLOGY SEGMENT']
      );
      result['children'] = addNodeData.children;
      result['item'] = result['TECHNOLOGY SEGMENT'];
      if (result['item'] === '' || result['item'] === null) {
        let dialogConfirm = this.dialog.open(AlertBoxComponent, {
          width: '300px',
          data: 'No Value Entered... Please Enter.'
        });
        dialogConfirm.afterClosed().subscribe(result => {
          window.location.reload();
        });
      } else {
        result['level'] = addNodeData.level;
        result['id'] = addNodeData.id;
        result['node'] = updatedNodeData;
        result['Condition Four Status'] = 'add';
        console.log('The addNodeData is ', result);
        this.emitNode(result, 1);
      }
    });
    // this.treeControl.expand(node);
  }
  closeNode(node: TodoItemFlatNode) {
    console.log('The closing node is ', node);
    const parentNode = this.flatNodeMap.get(node);
    console.log('The closing parent node is ', parentNode);
    this.closeItem(parentNode);
  }

  /** Save the node to database */
  saveNode(node: TodoItemFlatNode, itemValue: string) {
    const nestedNode = this.flatNodeMap.get(node);
    if (itemValue == '' || itemValue === null) {
      this.dialog.open(AlertBoxComponent, {
        width: '300px',
        data: 'No Value Entered... Please Enter.'
      });
    } else {
      let dialogConfirm = this.dialog.open(DynamicYesNoPopupComponent, {
        width: '300px',
        data: { textValue: 'Are you sure you want to add' }
      });
      dialogConfirm.afterClosed().subscribe(result => {
        console.log('The dialog confirm is closed with a action:', result);
        if (result == 100) {
          this.updateItem(nestedNode!, itemValue);
        } else {
          this.closeNode(node);
        }
      });
    }
  }
  deleteNode(node: TodoItemFlatNode) {
    console.log('deletion node is ', node);
    const parentNode = this.flatNodeMap.get(node);
    console.log('when add function is called the parent is ', parentNode);
    console.log('To delete the nodes ', parentNode.id);
    if (parentNode != null) {
      let dialogConfirm = this.dialog.open(DynamicYesNoPopupComponent, {
        width: '300px',
        data: { textValue: 'Are you sure you want to remove' }
      });
      dialogConfirm.afterClosed().subscribe(result => {
        console.log('The dialog confirm is closed with a action:', result);
        if (result == 100) {
          this.emitNode(parentNode, 3);
        }
      });
    }
  }
  editNode(node: TodoItemFlatNode) {
    console.log('time of adding', node);
    const parentNode = this.flatNodeMap.get(node);
    console.log('when add function is called the parent is ', parentNode);
    let editValue = {};
    editValue['Edit Item'] = parentNode.item;
    let techIdList = [];
    techIdList = parentNode.id;
    let horizontalId: number = techIdList[0];
    let technologySegmentId: number = techIdList[techIdList.length - 1];
    editValue['TECH ID'] = horizontalId;
    editValue['TECH SUB ID'] = technologySegmentId;
    editValue['LEVEL'] = node.level;

    let dialogEdit = this.dialog.open(SubTechnologyTableEditComponent, {
      width: '1700px',
      height: '700px',
      data: editValue
    });
    dialogEdit.afterClosed().subscribe(result => {
      console.log(result['Edit Item']);
      let editNodeData: TodoItemNode = Object.assign(parentNode);
      editNodeData.item = result['Edit Item'];
      result['children'] = editNodeData.children;
      result['item'] = result['TECHNOLOGY SEGMENT'];
      if (result['item'] === '' || result['item'] === null) {
        let dialogConfirm = this.dialog.open(AlertBoxComponent, {
          width: '300px',
          data: 'No Value Entered... Please Enter.'
        });
        dialogConfirm.afterClosed().subscribe(result => {
          window.location.reload();
        });
      } else {
        result['level'] = editNodeData.level;
        result['id'] = editNodeData.id;
        result['Condition Four Status'] = 'edit';
        console.log('The editNodeData is ', result);
        this.emitNode(result, 2);
      }
    });
    //  this.editValue = parentNode.item
    // this.editItem(parentNode!, this.editValue);
    // this.treeControl.expand(node);
  }

  emitNode(node: TodoItemNode, action: number) {
    this.action.emit({ nodeData: node, action: action });
    // this.newnode.emit(node);
    // this.action.emit(action);
  }
}
