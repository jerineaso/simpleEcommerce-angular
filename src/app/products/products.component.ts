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
  addCart : boolean = false


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

  addToCart(x: any, i:number){
    
    // console.log(x , "", i);
    // if(x.id === i){
    //   this.addCart = true
    //   setTimeout(()=>{
    //     this.addCart = false
    //   },2000)
    // }else{
    //   this.addCart = false
    // }
    
    
    this.cartService.addToCart(x)

  }
}
