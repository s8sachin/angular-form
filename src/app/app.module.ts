import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MaterialDatepickerComponent } from './material-datepicker/material-datepicker.component';
import { MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Thirdpartyng2DatepickerComponent } from './thirdpartyng2-datepicker/thirdpartyng2-datepicker.component';
import { NgDatepickerModule } from 'ng2-datepicker';

@NgModule({
  declarations: [
    AppComponent,
    ModelFormComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    MaterialDatepickerComponent,
    Thirdpartyng2DatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    NgDatepickerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
