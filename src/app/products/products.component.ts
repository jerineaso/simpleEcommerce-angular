import { Component, OnInit } from '@angular/core';
import { ProductsListService } from '../services/products-list.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  show : boolean = false
  item : string = ''
  apiData : any
  specificProduct : Array<any> = []

  constructor(private prdtlist : ProductsListService) { }

  ngOnInit( ): void {

  }

  getData(item : string) : any{
    this.prdtlist.getProduct(item).subscribe((res:any)=>{
      console.log(res.products);
      
      this.apiData = res
      this.specificProduct = this.apiData.products
      console.log(this.apiData.products);
    })
  }

  submit(category: string){
    if(category === 'phone' || category === 'laptop'){
      this.show = true
      this.item = category
      this.getData(this.item);
    }else{
      this.show = false
    }
  }

  

}
