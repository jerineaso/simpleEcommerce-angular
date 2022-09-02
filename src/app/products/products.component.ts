import { Component, Input, OnInit } from '@angular/core';
import { ProductsListService } from '../services/products-list.service';

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


  constructor(private prdtlist : ProductsListService) { 
    
  }

  ngOnInit( ): void {
  }


  getData(item : string) : any{
    this.prdtlist.getProduct(item).subscribe((res:any)=>{
      this.apiData = res.products
      console.log(typeof this.apiData);
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

}
