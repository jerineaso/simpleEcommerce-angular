import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {

  url : string = 'https://dummyjson.com/products/search?'

  constructor(private http : HttpClient) { }

  // Get Products
  getProduct(category: string){
    return this.http.get(this.url,{
      params : new HttpParams()
      .set('q',category)
    })
  }

}
