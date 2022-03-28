import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees:any = [];
  baseUrl = "./assets"

  constructor(private http:HttpClient) { }

  getEmployees(): Observable<any> {
    return this.http.get(`${this.baseUrl}/employee.json`).pipe(
      map((res)=>{
        this.employees = res;
        return this.employees
      }),
      catchError(this.errorHandler)
    )
  }
  errorHandler(error:HttpErrorResponse){
    console.log(error);
    return throwError("error");
  }
}
