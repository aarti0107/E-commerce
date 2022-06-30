import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartapiService } from 'src/app/services/cartapi.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

 public productList:any;
  
  searchKey:any=""
  filtercategory:any

  

  constructor(private api:ApiService, private cartApi:CartapiService) { }

  ngOnInit(): void {
     this.api.getproduct().subscribe((data) => {
     
     this.productList = data
     
     
    //   this.productList.forEach((a:any )=> {
    //     Object.assign(a,{quantity:1,total:a.price})
    //   });
      })
    //this.cartApi.producCategory(product).subscribe((result:any) => {

    //})
    this.cartApi.search.subscribe((data) =>{
      this.searchKey= data
    })  
         
   }
   addtoCart(product:any){
     this.cartApi.addToCart(product)
     console.log(product)
  }
  filter(product:any){
      this.api.producCategory(product).subscribe((a:any) =>{
        this.productList = a
        console.log(this.filtercategory)
      })

  
  
//    filter(category:any){
//      this.filtercategory = this.productList
//      .filter((product:any)=>{
//        if( product.category == category ){
//          return product
         
//        }
//        console.log(product)
//      })
     
   
// }
 
}     

}    
  
    
 
  

 
     
       
     
  
  



