import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminServicesService } from 'src/app/services/adminServices/admin-services.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { CartServiceService } from 'src/app/services/cartServices/cart-service.service';
@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent implements OnInit {

  showVar: boolean = true;
  showItem : boolean = false;
  uploadSize : boolean = false
  itemChanged : boolean = false
  btnShow : boolean = false
  img : boolean = false
  
  formContainer !: FormGroup
  item : any
  specData : any
  cartData : any

  checkData : any

  constructor(private fb : FormBuilder, private admin : AdminServicesService, private cartServ : CartServiceService) { }

  ngOnInit(): void {
  
    this.formContainer = this.fb.group({
      addDataForm : this.fb.array(
        [this.createItemData()]
      )
    })


    this.cartData = this.cartServ.getCartItem();
  }

  toggleBtn(){
    this.showItem = false
    this.showVar = true
  }

  toggleItem(){
    this.showVar = false
    this.showItem = true

    this.item = this.admin.getItem();

    console.log(this.item);
    

  }

  get itemData(): FormArray{
    return this.formContainer.get('addDataForm') as FormArray;
  }

  createItemData(){
    return this.fb.group({
      itemName: new FormControl('',[
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern("[a-zA-Z][a-zA-Z ]+")
      ]),
      itemCode : new FormControl('',[
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9]{5}$")
      ]),
      itemDescrip : new FormControl('',[
        Validators.required,
        Validators.maxLength(500)
      ]), 
      itemPrice : new FormControl("",[
        Validators.required,
        Validators.max(10000)
      ]),
      itemImage : new FormControl('',[
        Validators.required,
      ])
    })
  }

  onSubmit(x: any){ 

    
    if(this.itemData.valid){
      this.admin.addItem(this.itemData.value[x]);
      this.itemChanged = false

      let data = this.createItemData();
      this.itemData.push(data)

    }
    
  }

  onEdit(){
    this.btnShow = true
  }

  onUpdate(x:any){
    this.btnShow = false
    const data = (<FormArray>this.formContainer.get('addDataForm')).at(x).value;

    console.log(data);
    
    this.specData = this.itemData.value.find((item:any)=>{
      return item.itemCode === data.itemCode  
    })
    
    data.itemCode = this.specData.itemCode
    data.itemName = this.specData.itemName
    data.itemDescrip = this.specData.itemDescrip
    data.itemPrice = this.specData.itemPrice
    data.itemImage = this.specData.itemImage

    console.log(data);
    
    this.admin.setItem(data)
    alert("Updated Successfully!!!")


  }

  onDelete(x:number){
    console.log(this.cartData);
    const data = (<FormArray>this.formContainer.get('addDataForm')).at(x).value;

    this.specData = this.itemData.value.find((item:any)=>{
      return item.itemCode === data.itemCode  
    })

    this.checkData = this.cartData.find((item:any)=>{
      return item.brand === this.specData.itemName
    })
    
    if(this.checkData){
      alert("Can't Delete, Already in the user cart!!!")
    }else{

      let confirmation = window.confirm("Are you sure want to delete?.");

      if(confirmation){
        this.itemData.removeAt(x)
        alert("Successfully Deleted!!...")
      }else{
        alert("Action Canceled")
      }

    }
  }

  // Image Cropping
  imageChangedEvent: any = '';
    croppedImage: any = '';
  
    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;

        this.itemChanged = true

        // Size
        for (let i = 0; i < event.target.files.length; i++) { 

          let type = event.target.files[i].type;
          let size = event.target.files[i].size;
          
          console.log(type);
          if(type === 'image/jpeg' || type === 'image/png' || type==='image/jpg'){
            this.img = false
          }else{
            this.img = true
          }
          
        
          let sizeKB = Math.round(size / 1024);
          console.log(sizeKB);
          
          if(sizeKB >= 170){
            this.uploadSize = true
          }else{
            this.uploadSize = false
          }
    
        }
    }
    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }
    imageLoaded() {
        /* show cropper */
    }
    cropperReady() {
        /* cropper ready */
    }
    loadImageFailed() {
        /* show message */
    }
}



