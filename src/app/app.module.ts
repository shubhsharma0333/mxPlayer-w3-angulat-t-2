import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { routes } from 'src/routes';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    EmployeeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, CommonModule, RouterModule.forRoot(routes), ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
