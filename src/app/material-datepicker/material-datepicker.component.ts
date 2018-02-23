import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-material-datepicker',
  templateUrl: './material-datepicker.component.html',
  styleUrls: ['./material-datepicker.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MaterialDatepickerComponent {

  dob: Date|undefined;

  onDobChange () {

    console.log(this.dob);
  }
}
