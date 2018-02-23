import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})

/**
 * @description Model Form Component class used to created FormGroup Based attributes.
 *
 * @class ModelFormComponent
 * @implements {OnInit}
 */
export class ModelFormComponent implements OnInit {

  langs: string[] = [
    'English',
    'French',
    'German',
  ];
  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;

  /**
   * @description Calls CreateFormControls and CreateForm methods.
   * @override
   */
  ngOnInit() {

    this.createFormControls();
    this.createForm();
  }

  /**
   * @description Create Form controls and initialize form.
   * @memberOf ModelFormComponent
   */
  createFormControls() {

    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*')
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.language = new FormControl('');
  }

  /**
   * @description Created myForm FormGroup having various attributes.
   * @memberOf ModelFormComponent
   */
  createForm() {

    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
      email: this.email,
      password: this.password,
      language: this.language
    });
  }

  /**
   * @description Triggered when submit button is clicked in the form.
   *              Also ensures if the form is valid before executing.
   * @memberOf ModelFormComponent
   */
  onSubmit() {

    if (this.myform.valid) {

      console.log('Form Submitted!');
      this.myform.reset();
    }
  }
}
