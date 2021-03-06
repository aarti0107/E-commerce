import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

   baseUrl = "http://localhost:3000/"

  constructor( private http:HttpClient) { }
  getproduct(){
    return this.http.get(this.baseUrl+"products")
  }
  producCategory(product:any){
    return this.http.get(this.baseUrl+'products?category=' + product)
    
  }
  
  
}


