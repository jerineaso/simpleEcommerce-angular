import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServicesService {

  item : Array<any> = []
  addedData : Array<any> = []
  code : any

  constructor() { }

  addItem(x:any){
    this.item.push(x)
  }

  getItem(){
    return this.item;    
  }

  setItem(x:any){
    console.log(x);
    
    // this.item.forEach((item:any)=>{
    //   if(item.itemcode === x.itemcode){
    //     console.log(item = x);
    //     item = x
    //   } 
    //   return item
    // })

    this.code = this.item.findIndex((obj => obj.itemCode === x.itemCode))
    this.item[this.code] = x
  }
}
