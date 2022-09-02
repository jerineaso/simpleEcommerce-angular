import { Component, Input, OnInit } from '@angular/core';
import { CartServiceService } from '../services/cartServices/cart-service.service';
import { ProductsListService } from '../services/productService/products-list.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() searchValue : string = ''

  show : boolean = false
  item : string = ''
  apiData : any


  constructor(private prdtlist : ProductsListService, private cartService : CartServiceService) { 
    
  }

  ngOnInit( ): void {
  }


  getData(item : string) : any{
    this.prdtlist.getProduct(item).subscribe((res:any)=>{
      this.apiData = res.products
    })
  }

  submit(category: string){
    if(category === 'smartphones' || category === 'laptops'){
      this.show = true
      this.item = category
      this.getData(this.item);
    }else{
      this.show = false
    }
  }  

  addToCart(x: any){
    this.cartService.addToCart(x)
  }
}
