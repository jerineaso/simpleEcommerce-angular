import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminServicesService } from 'src/app/services/adminServices/admin-services.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent implements OnInit {

  showVar: boolean = false;
  showItem : boolean = false;
  
  formContainer !: FormGroup
  uploadSize : boolean = false
  item : any
  specData : any

  constructor(private fb : FormBuilder, private admin : AdminServicesService) { }

  ngOnInit(): void {
  
    this.formContainer = this.fb.group({
      addDataForm : this.fb.array(
        [this.createItemData()]
      )
    })

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

  onSubmit(){ 
    console.log(this.itemData.value[0]);
    
    this.admin.addItem(this.itemData.value[0]);
  }

  getFileDetails(e : any){
    for (let i = 0; i < e.target.files.length; i++) { 

      let type = e.target.files[i].type;
      let size = e.target.files[i].size;
      
    
      let sizeKB = Math.round(size / 1024);
      console.log(sizeKB);
      
      if(sizeKB >= 170){
        this.uploadSize = true
      }else{
        this.uploadSize = false
      }

    }
  }

  // Image Cropping
  imageChangedEvent: any = '';
    croppedImage: any = '';
  
    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
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



