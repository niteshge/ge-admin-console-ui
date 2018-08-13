import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  MatAutocompleteSelectedEvent,
  MatChipInputEvent
} from '../../../../node_modules/@angular/material';
import { FormControl, FormGroup, FormBuilder } from '../../../../node_modules/@angular/forms';
import { Observable } from '../../../../node_modules/rxjs';
import { startWith, map } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-dynamic-chip',
  templateUrl: './dynamic-chip.component.html',
  styleUrls: ['./dynamic-chip.component.css']
})
export class DynamicChipComponent implements OnInit, OnChanges {
  @Input()
  widthStyle = '240px';
  @Input()
  placeholder;
  @Input()
  disabledParam: boolean = false;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  formCtrl = new FormControl();
  form: FormGroup;
  filteredItems: Observable<string[]>;
  @Input()
  items: string[] = [];
  @Input()
  allItems: string[] = [];
  @Output()
  optionSelected = new EventEmitter();
  displayedOptions;

  @ViewChild('itemInput')
  itemInput: ElementRef;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      value: ''
    })
  }

  ngOnChanges() {
    this.displayedOptions = this.allItems;
  }
  ngOnInit(): void {
    this.initialize();
  }
  initialize() {
    this.displayedOptions = this.allItems;
    // this.filteredItems = this.formCtrl.valueChanges.pipe(
      // startWith(null),
      // map(
        this.getFiltered.bind(this)
      // )
    // );
  }

  getFiltered(item: string | null) {
  // return item ? this._filter(item) : this.allItems;
  this.form
  .get('value')!
  .valueChanges.subscribe(
    val =>
      (this.displayedOptions = (this.allItems || []).filter(opt =>
        opt.startsWith(val)
      ))
  );
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.items.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.formCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.items.indexOf(fruit);

    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.items.push(event.option.viewValue);
    this.itemInput.nativeElement.value = '';
    this.formCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allItems.filter(
      fruit => fruit.toLowerCase().indexOf(filterValue) === 0
    );
  }
  onOptionSelected() {

    console.log("the event selected is ",this.items);
    this.optionSelected.emit(this.items);
  }
  changeSelected() {

    // console.log("THE VALUE IS ", e);

  }
  // onNewFunction(){
  //   console.log(arguments);
  // }

}
