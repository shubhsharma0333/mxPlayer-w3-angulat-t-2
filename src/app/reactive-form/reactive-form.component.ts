import { Component, OnInit } from '@angular/core';
import { AbstractControl,  FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  
  submitted = false;

  form = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(5) ,Validators.pattern(/^[a-z]+$/)]],
    city: ["", [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-z]+$/)]],
    email: ["", [Validators.required, Validators.pattern(/^([a-zA-z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/)]],
    mobile: ["",[Validators.required, Validators.minLength(10), Validators.pattern(/^[0-9]+$/)]],
    pincode:["", [Validators.required, Validators.minLength(6), Validators.pattern(/^[0-9]+$/)]]
  });

  get f(): {[key:string]: AbstractControl}{
    return this.form.controls
  }

  afterSubmit(){
    this.submitted =true;
    if(this.form.invalid){
      return
    }
    alert(JSON.stringify(this.form.value))
  }


}
