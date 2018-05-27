import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-select',
  templateUrl: './dynamic-select.component.html',
  styleUrls: ['./dynamic-select.component.css']
})
export class DynamicSelectComponent implements OnInit, OnChanges {
  @Input() options;
  @Input() placeholder;
  @Input() anyObject;
  @Output() optionSelected = new EventEmitter();
  @Output() objectSelected = new EventEmitter();
  @Output() placeholderSelected = new EventEmitter();
  
  form: FormGroup;
  displayedOptions;
  
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      value: '',
    });
  }

  ngOnChanges() {
    this.displayedOptions = this.options;
  }

  ngOnInit() {
    this.form.get('value')!.valueChanges.subscribe(
      val => this.displayedOptions = this.options.filter(opt => opt.startsWith(val))
    )
  }

  onOptionSelected(event) {
    this.optionSelected.emit(event.option.value);
  }

  onObjectSelected(event,placeholderSelected){
    this.objectSelected.emit(event);
    this.placeholderSelected.emit(placeholderSelected);
  }


}
