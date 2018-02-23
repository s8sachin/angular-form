import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatepickerOptions } from 'ng2-datepicker';
import * as enLocale from 'date-fns/locale/en';

@Component({
  selector: 'app-thirdpartyng2-datepicker',
  templateUrl: './thirdpartyng2-datepicker.component.html',
  styleUrls: ['./thirdpartyng2-datepicker.component.scss']
})
export class Thirdpartyng2DatepickerComponent implements OnInit {

  userForm: FormGroup;
  dob: FormControl;
  dobModel: Date;

  options: DatepickerOptions = {
    minYear: 1900,
    maxYear: 2018,
    displayFormat: 'MMM D[,] YYYY',
    barTitleFormat: 'MMMM YYYY',
    dayNamesFormat: 'dd',
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    locale: enLocale,
    minDate: new Date('1900-01-01'), // Minimal selectable date
    maxDate: new Date(),  // Maximal selectable date
    barTitleIfEmpty: 'Click to select a date'
  };

  ngOnInit () {

    this.createFormControls();
    this.createForm();
  }

  createFormControls () {

    this.dob = new FormControl('', Validators.required);
  }

  createForm () {

    this.userForm = new FormGroup({
      dob: this.dob
    });

    this.dobModel = new Date();
  }

  onDobChange () {

    console.log(this.dob.value);
    console.log(this.dobModel);
  }
}
