import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartapiService } from 'src/app/services/cartapi.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productList:any=[]
  // total :any = 0
  constructor(private api : ApiService, private cartapi : CartapiService) { }

  ngOnInit(): void {
    this.cartapi.getproductData().subscribe((data) => {
      this.productList = data
     // this.total = this.cartapi.getTotal()
      // console.log(data)
    })
    
      
  }
  removeData(item:any){
   this.cartapi.removecartData(item)
  }

  emptyCart(){
    this.cartapi.removeAll()
  }

  
}

