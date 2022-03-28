import { Routes } from "@angular/router";
import { EmployeeComponent } from "./app/employee/employee.component";
import { ProductComponent } from "./app/product/product.component";
import { ReactiveFormComponent } from "./app/reactive-form/reactive-form.component";
import { TemplateFormComponent } from "./app/template-form/template-form.component";
export const routes:Routes=[
    {path:"rForm" , component:ReactiveFormComponent},
    {path:"tForm", component:TemplateFormComponent},
    {path:"employee", component:EmployeeComponent},
    {path:"product", component:ProductComponent}
]