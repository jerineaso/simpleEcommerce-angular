import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router , Event} from '@angular/router';
import { CartServiceService } from '../services/cartServices/cart-service.service';
import { ProductsListService } from '../services/productService/products-list.service';
import { UserAuthService } from '../services/userAuthServices/user.auth.service';

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
  user : any
  message !: string;

  constructor(private prdtlist : ProductsListService, private cartService : CartServiceService, private route : ActivatedRoute, private router : Router, private userAuth : UserAuthService) { 
      
      this.router.events.subscribe((event:Event)=>{
        if(event instanceof NavigationStart){
          const searchData = String(event.url.slice(10,20));
          this.search = searchData
          this.getData(this.search)
        }
      })
  }

  ngOnInit( ): void {

      const routeParams = this.route.snapshot.paramMap
      const searchData = String(routeParams.get('search'));
      this.getData(searchData)

      
      this.userAuth.getUserData().subscribe(items=>{
        
        items.forEach((item:any)=>{
          if(item.uid === this.userAuth.currentUser.uid){
            this.user = item.name
          }
         })
      })

  }


  getSpecificData(item: string): any{
    this.prdtlist.getProduct(item).subscribe((res:any)=>{
      res.products.forEach((element:any) => {
        element[this.quantitys] = 1
        element[this.added] = false
      });
      this.apiData = res.products

      if(this.apiData.length != 0){
        this.message = ""
      }
    })
  }  

  getData(item : string) : any{
    this.prdtlist.getSpecificProduct(item).subscribe((res:any)=>{
      res.products.forEach((element:any) => {
        element[this.quantitys] = 1
        element[this.added] = false
      });
      this.apiData = res.products
      
      if(this.apiData.length === 0){
        this.message = "No Data Found"
      }
    })
  }

  submit(category: string){
    if(category === 'smartphones' || category === 'laptops'){
      this.show = true
      this.item = category
      this.getSpecificData(this.item);
    }else{
      this.show = false
    }
  }  

  addToCart(x: any){
    this.cartService.addToCart(x)
    this.userAuth.createSubCollections(this.data)

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

  signOut(){
    this.userAuth.logout();
    this.router.navigateByUrl('/userSignIn');
  }
}
