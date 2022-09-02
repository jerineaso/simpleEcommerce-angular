import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsListService } from '../services/products-list.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

  apiData : any = []
  specificPrdt : any | undefined

  constructor(private route: ActivatedRoute, private prdtlist : ProductsListService) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;

    const productIdFromRoute = Number(routeParams.get('itemid'));
    const productCatFromRoute = String(routeParams.get('itemCat'));

    this.getData(productCatFromRoute);

    
  }

  getData(item : string) : any{

   
    this.prdtlist.getProduct(item).subscribe((res:any)=>{
      
      this.apiData = [...res.products]
      console.log(this.apiData.length);     
    })  

    // for(let i=0;i<this.apiData.length;i++){
    //   console.log(this.apiData[i]);
      
    // }
    console.log(this.apiData.length);     
 
  }
}
