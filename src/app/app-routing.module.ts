import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelFormComponent } from './model-form/model-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MaterialDatepickerComponent } from './material-datepicker/material-datepicker.component';
import { Thirdpartyng2DatepickerComponent } from './thirdpartyng2-datepicker/thirdpartyng2-datepicker.component';
import { CrudAppComponent } from './crud-app/crud-app.component';

const routes: Routes = [
  {path: '', redirectTo: 'model-driven', pathMatch: 'full'},
  {path: 'model-driven', component: ModelFormComponent},
  {path: 'template-driven', component: TemplateFormComponent},
  {path: 'reactive', component: ReactiveFormComponent},
  {path: 'material-datepicker', component: MaterialDatepickerComponent},
  {path: 'ng2-datepicker', component: Thirdpartyng2DatepickerComponent},
  {path: 'crud-app', component: CrudAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
