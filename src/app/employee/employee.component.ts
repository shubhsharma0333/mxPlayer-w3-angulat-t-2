import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employess:any =[];
  salary:number = 0 ;
  city:any = "";
  filter:any=[];
  mName:any="";


  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees()
  }

  getEmployees(): void{
    this.employeeService.getEmployees().subscribe(
      (res=>{
        this.employess =res;
        console.log(this.employess)
      })
    )
  }

  fBySalary(){
    if(this.salary== 0){
      return
    }
    this.filter=[];
    for(let i =0;i< this.employess.length;i++){
      if(Number(this.salary) <= this.employess[i].salary ){
        this.filter.push(this.employess[i])
      }
    }
    console.log(this.filter)
  }

  fByCity(){
    if(this.city== ""){
      return
    }
    this.filter=[];
    for(let i =0;i< this.employess.length;i++){
      if(this.city == this.employess[i].city ){
        this.filter.push(this.employess[i])
      }
    }
    console.log(this.filter)
  }

  fByMname(){
    if(this.mName== ""){
      return
    }
    this.filter=[];
    for(let i =0;i< this.employess.length;i++){
      if(this.mName == this.employess[i].managerName ){
        this.filter.push(this.employess[i])
      }
    }
    console.log(this.filter)
  }


}
