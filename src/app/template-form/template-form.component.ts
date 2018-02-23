import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

class Signup {

  constructor(
    public name: object = {firstName: '', lastName: ''},
    public dob: object = new Date('1970-01-01'),
    public dobString: string = Signup.formatDate(dob),
    public email: string = '',
    public password: string = '',
    public language: string = '') {}

  static formatDate(date) {

    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) { month = '0' + month; }
    if (day.length < 2) { day = '0' + day; }

    return [year, month, day].join('-');
  }
}

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})

export class TemplateFormComponent {

  user: Signup = new Signup();
  @ViewChild('formRef') form: any;

  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  onDobChange () {

    this.user.dob = new Date(this.user.dobString);
  }

  onSubmit() {

    if (this.form.valid) {

      console.log('Form Submitted!');
      this.form.reset();
    }
  }
}
