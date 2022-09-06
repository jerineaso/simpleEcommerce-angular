import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from '../services/cartServices/cart-service.service';
import { ProductsListService } from '../services/productService/products-list.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

  show : boolean = true
  data : any 
  quantity : number = 1
  subTotal : number = 0
  total : number = 0
  price : number = 0
  sample : any

  constructor(private cartService : CartServiceService) { }

  ngOnInit(): void {

    this.data = this.cartService.getCartItem()

    if(this.data.length === 0){
      this.show = false
    }else{
      this.show = true
    }

    this.sample = this.cartService.subTotalCart()
    this.subTotal = this.sample
    this.totalValue(this.sample);
  }
  
  totalValue(x:any){ 
    this.total = ((x * 3)/100) + x
  }

  removeItem(i:number): void{
    this.cartService.removeCartItem(i)
    this.sample = this.cartService.subTotalCart()
    this.subTotal = this.sample
    this.totalValue(this.sample);
  }
}
