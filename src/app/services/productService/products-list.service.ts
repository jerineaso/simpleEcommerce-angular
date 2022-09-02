import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {

  url : string = 'https://dummyjson.com/products/category'

  constructor(private http : HttpClient) { }

  // Get all products

  getProduct(item: string){
    return this.http.get(this.url+'/'+item)
  }

  // Get Specific Products

  getSpecificProduct(category: string){
    return this.http.get(this.url,{
      params : new HttpParams()
      .set('q',category)
    })
  }
}
