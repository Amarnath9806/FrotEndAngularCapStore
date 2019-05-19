import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
// import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

export class Refund{
  refundId:number
  orderId:number
  productId:number
  productPrice:number
  customerId:number
  productQuantity:number
}


export class Refunds{
  transactionId:number
  refundId:number
  orderId:number
  productId:number
  productPrice:number
  customerId:number
  productQuantity:number
}


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 
  private headers = new HttpHeaders({ 'Content-type': 'application/json' });
  private options = { headers: this.headers }

  refunds:Array<Refund>=[]
  refunds1:Array<Refunds>=[]
 
  index:number
  // book:Book
  refund:Refund
  refun:Refunds
  refunded:boolean=false
  refunded1:boolean=false
  constructor(private router: Router, private httpClient: HttpClient){}
  ngOnInit() {
  }
  
onSubmit(){
  this.refunded=!this.refunded
  this.httpClient.get('http://localhost:8086/getAll', this.options).subscribe(
   (response:any) =>{
     this.refunds=response
     console.log(this.refunds)
    },
          
    (error) =>{
      alert("Something went wrong!!!!!!  Plz try again");
    });
  
}
returnSort(){
  this.refunds.sort(function(obj1,obj2){
  return obj1.refundId - obj2.refundId;
  });
}

orderSort(){
  this.refunds.sort(function(obj1,obj2){
  return obj1.orderId - obj2.orderId;
  });
}

productSort(){
  this.refunds.sort(function(obj1,obj2){
  return obj1.productId - obj2.productId;
  });
}

quantitySort(){
  this.refunds.sort(function(obj1,obj2){
  return obj1.productPrice - obj2.productPrice;
  });
}

priceSort(){
  this.refunds.sort(function(obj1,obj2){
  return obj1.productPrice - obj2.productPrice;
  });
}

priceSort1(){
  this.refunds.sort(function(obj1,obj2){
  return obj1.productPrice - obj2.productPrice;
  });
}

transactionSort(){
  this.refunds.sort(function(obj1,obj2){
  return obj1.productPrice - obj2.productPrice;
  });
}

customerSort(){
this.refunds.sort(function(obj1,obj2){
return obj1.customerId - obj2.customerId;
});

}
 
refundAmount(id:number){
  this.refund=this.refunds[id]
  console.log(this.refund)
  this.refunds.splice(id,1)
  this.httpClient.put('http://localhost:8086/delete',this.refund).subscribe(
  
    (response:any) =>{
     this.refund=response
     console.log(this.refund)
    },
          
    (error) =>{
      alert("Something went wrong!!!!!!  Plz try again");
    });
}

Refunded(){
  this.refunded1=!this.refunded1
  this.httpClient.get('http://localhost:8086/getRefunds', this.options).subscribe(
  
    (response:any) =>{
     this.refunds1=response
     console.log(this.refunds1)
    },
          
    (error) =>{
      alert("Something went wrong!!!!!!  Plz try again");
    });
  
}

}
