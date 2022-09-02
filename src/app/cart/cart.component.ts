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

  constructor(private cartService : CartServiceService) { }

  ngOnInit(): void {

    this.data = this.cartService.getCartItem()
    console.log(this.data);
    if(this.data.length === 0){
      this.show = false
    }else{
      this.show = true
    }
    
    // const routeParams = this.route.snapshot.paramMap;

    // this.productIdFromRoute = Number(routeParams.get('itemid'));
    // const productCatFromRoute = String(routeParams.get('itemCat'));
    // this.getData(productCatFromRoute);
  }

  getData(item : string) : any{
    // this.prdtlist.getProduct(item).subscribe((res:any)=>{
    //   this.apiData = res.products
    //   this.specificPrdt = this.apiData.find((item:any)=>{
    //     return item.id === this.productIdFromRoute
    //   })
    // })  
  }
}
