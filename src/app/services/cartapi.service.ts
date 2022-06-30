import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartapiService {
  baseUrl = "http://localhost:3000/"

  public cartDataList:any=[] 

   public productList = new BehaviorSubject<any>([])
   public search = new BehaviorSubject<any>("")
   public productData = this.productList.asObservable()
  constructor( private http:HttpClient) { }
  
  //  producCategory(id:number){
  //    return this.http.get(this.baseUrl+'categories/'+id)
  //  }
  
  
  getproductData(){
   return this.productData
  }
  setproductData(product:any){
    
     this.cartDataList.push(product)
     this.productList.next(product)
    
  }

  addToCart(product:any){
    this.cartDataList.push(product)
    this.productList.next(this.cartDataList)
   // this.getTotal()
   
    console.log(this.cartDataList)
    //console.log(this.productList
    
  }

  //  getTotal(){
  //    let grendtotal = 0 ;
  //    this.cartDataList.map((a:any) => {
  //      grendtotal += a.total
  //      console.log(a)
  //    }) 
  //  }
 
  
   removecartData(product:any){
    this.cartDataList.map((a:any,index:any) => {
      if(product.id === a.id){
      this.cartDataList.splice(index,1)
      }

    })
    this.productList.next(this.cartDataList)
  }
  removeAll(){
      this.cartDataList = []
      this.productList.next(this.cartDataList)
  }
}

