import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  search : any
  addCart : boolean = false
  data : any
  quantity: number = 0
  quantitys = "quantity"
  added = "added"


  constructor(private prdtlist : ProductsListService, private cartService : CartServiceService, private route : ActivatedRoute) { 
    
  }

  ngOnInit( ): void {
    // const routeParams = this.route.snapshot.paramMap;
    // const searchData = String(routeParams.get('search'));
    // console.log(searchData);
    
    // this.getSpecificData(searchData)
  }

  //  routeParams = this.route.snapshot.paramMap;
  //   searchData = String(this.routeParams.get('search'));
      


  getSpecificData(item: string): any{
    this.prdtlist.getProduct(item).subscribe((res:any)=>{
      res.products.forEach((element:any) => {
        element[this.quantitys] = 1
        element[this.added] = false
      });
      this.apiData = res.products
      console.log(this.apiData);
      
    })
  }  

  getData(item : string) : any{
    this.prdtlist.getProduct(item).subscribe((res:any)=>{
      res.products.forEach((element:any) => {
        element[this.quantitys] = 1
        element[this.added] = false
      });
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

    x.added = true
    setTimeout(()=>{
      x.added = false
    },2000)
  }

  quantityItem(value : string,item: any): void{
    this.data = this.apiData.find((val:any)=>{
      return val.id === item.id
    })
    if(value === "increment"){
      this.data.quantity++;
    }else if(value === "decrement"){
      this.data.quantity--;
    }else{
      this.data.quantity
    }
  }
}
