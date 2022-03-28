import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:any = [];
  filter:any = [];
  price:number= 0;
  name:any="";

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void{
    this.productService.getProducts().subscribe(
      (res=>{
        this.products =res;
        console.log(this.products)
      })
    )
  }

  fByPrice(){
    if(this.price== 0){
      return
    }
    this.filter=[];
    for(let i =0;i< this.products.length;i++){
      if(Number(this.price) <= this.products[i].price ){
        this.filter.push(this.products[i])
      }
    }
    console.log(this.filter)
  }

  fByName(){
    if(this.name== ""){
      return
    }
    this.filter=[];
    for(let i =0;i< this.products.length;i++){
      if(this.name == this.products[i].name ){
        this.filter.push(this.products[i])
      }
    }
    console.log(this.filter)
  }
}


