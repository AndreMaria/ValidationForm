import { Component, Input, Output, EventEmitter, OnInit, ViewChild, AfterViewInit , ChangeDetectorRef} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CustomValidators } from './../CustomValidators';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

  readonly dataMinDate = Date;
  readonly dataMaxDate = Date;

    @Input() formGroup: FormGroup;
    @Input() controlName: string;
    @Input() controlItemName: string;
    @Input() required: boolean;

    @Output() dateChange: EventEmitter<string> = new EventEmitter<string>();

    previous;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {

    if (!this.formGroup.controls[this.controlName]) {
      this.formGroup.addControl(this.controlName, new FormControl());

    }

    if (this.required) {
        this.formGroup.controls[this.controlName].setValidators([CustomValidators.required, Validators.required]);
    }
  }

  ngDoCheck() {
      this.cd.detectChanges();
  }

  isInvalid(field: string, validate: string): boolean {
    const fieldControl = this.formGroup.controls[field];
    return (fieldControl.touched) && ((validate) ? (fieldControl.hasError(validate)) : fieldControl.invalid);
  }
}

