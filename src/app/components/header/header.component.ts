import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/services/cartapi.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  totalitem :number = 0
  searchTerms:string = ""
  

  constructor(private cartApi : CartapiService , private route:Router ,private api:ApiService) { }

  ngOnInit(): void {
   this.cartApi.getproductData().subscribe((data) => {
     this.totalitem = data.length
     
    
     
    
   })
   }

  search(event:any){
    this.searchTerms = (event.target as HTMLInputElement).value
    console.log(this.searchTerms)
    this.cartApi.search.next(this.searchTerms)
  }
  // filter(products:any){
  //   this.api.producCategory(products).subscribe((a:any) =>{
  //     this.filtercategory = a
  //     console.log(a)
  //   })
      // this.filtercategory.forEach((a:any) => {
      //   if(a.category == category || a.category == ""){
      //     return a
      //   }
       
      // }) 
    
      

    }
    
  
  

