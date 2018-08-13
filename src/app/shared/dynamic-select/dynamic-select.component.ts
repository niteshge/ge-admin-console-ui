import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dynamic-select',
  templateUrl: './dynamic-select.component.html',
  styleUrls: ['./dynamic-select.component.css']
})
export class DynamicSelectComponent implements OnInit, OnChanges {
  stateChanges: Subject<void> = new Subject<void>();
  @Input() widthStyle = '240px';
  @Input() options = [];
  @Input() placeholder;
  @Input() anyObject;
  @Input() disabledParam: boolean = false;
  @Input() defaultValue: string;
  @Output() optionSelected = new EventEmitter();
  @Output() objectSelected = new EventEmitter();
  @Output() placeholderSelected = new EventEmitter();

  form: FormGroup;
  formctrl: FormControl;
  displayedOptions;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      value: ''
    })
  }

  ngOnChanges() {
    // let dummyList = [];
    // this.options.forEach(opt => {
    //   if(opt!=null){
    //     dummyList.push(opt);
    //   }
    // });
    // this.options = dummyList;

    this.displayedOptions = this.options;
    console.log(this.displayedOptions);
    console.log('the disable status is ', this.disabledParam);
      if (this.disabledParam === false) {
          this.form.enable();
        
        // this.form.disabled ? this.form.enable():this.form.disable() ;
        // this.form.disabled ? this.form.disable(): this.form.enable() ;
        console.log(
          'before adding the displate options ',
          this.displayedOptions
        );
        this.displayedOptions = this.options;
        console.log('after adding the display options ', this.displayedOptions);
        this.form.patchValue({
          value: this.defaultValue
        })
      } else {
        this.form.disable();
        this.form.patchValue({
          value: '<no value>'
        })
        this.displayedOptions = [];
    }
  }

  ngOnInit() {
    console.log('The disabled value ', this.disabledParam);
    let defaultTemp = '';
    if (this.defaultValue === null) {
      //Do Nothing
    } else {
      defaultTemp = this.defaultValue;
    }
    this.form.patchValue({
      value: defaultTemp
    })
    this.form
      .get('value')!
      .valueChanges.subscribe(
        val =>
          (this.displayedOptions = (this.options || []).filter(opt =>
            opt.startsWith(val)
          ))
      );
  }

  onOptionSelected(event) {
    this.optionSelected.emit(event.option.value);
  }

  onObjectSelected(event, placeholderSelected) {
    this.objectSelected.emit(event);
    this.placeholderSelected.emit(placeholderSelected);
  }
}
