import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  currentUser : any
  items: any
  id : any
  currentUserCart : any
  baseUsers : any

  constructor( private firebase : AngularFireAuth, private router :  Router, private firestore : AngularFirestore) {
    firebase.authState.subscribe(user=>this.currentUser = user)

   }

  async signUp(email: string, pass:string, users : any){
    const userAuth = this.firebase.createUserWithEmailAndPassword(email,pass)
    userAuth.then(res=>{
      this.createUserData(users,res)
      this.router.navigateByUrl('/userSignIn')
    },_error =>{
      this.router.navigateByUrl('/userSignUp')

    })
  }

  logIn(email: string, pass : string){
    this.firebase.signInWithEmailAndPassword(email, pass).then(()=>{
      this.router.navigateByUrl('/products')
      console.log(this.currentUser);
      this.updateUser(this.currentUser.uid)
      localStorage.setItem('token',JSON.stringify(this.currentUser))
    },error =>{
      console.log(error.message);
      this.router.navigateByUrl('/userSignIn')
    });
  }

  logout(){
    this.firebase.signOut().then(()=>{
      localStorage.removeItem('token')
    })
  }

  createUserData(data : any, id : any){
    return new Promise<any>((resolve, reject) =>{
      this.firestore
        .collection("users")
        .doc(id.user.uid)
        .set(data)
        .then(res => {
          console.log(res);
        }, err => reject(err));
  });

  }

  updateUser(data :any){
    this.firestore.collection('users').doc(data).update({
      uid : data
    })
  }

  getUserData() { 
   return this.items = this.firestore.collection("users").valueChanges();
  }

  createSubCollections(cart : any){
    const docRef = this.firestore.collection('users').doc(this.currentUser.uid)
    const isCart = this.firestore.collection('users').doc(this.currentUser.uid).collection('cart').doc(this.currentUser.email).get();
    console.log(isCart);

    docRef.get().subscribe((doc)=>{
      if(doc.exists){
        this.baseUsers = doc.data()
        
        if(this.baseUsers.uid == this.currentUser.uid && cart){    
          this.firestore.collection('users').doc(this.baseUsers.uid).collection('cart').doc(this.baseUsers.email).set({
            cart : cart
          })
        } 
      }
    })
  }


  getCartData(){
    const user = localStorage.getItem('token');
    this.currentUser = user !== null ? JSON.parse(user) : '';
    this.baseUsers = this.firestore.collection('users').doc(this.currentUser.uid).collection('cart').doc(this.currentUser.email).valueChanges();
    this.baseUsers.forEach((item:any)=>{
     item.cart.forEach((data : any)=>{
        if(data.length !=0){
          this.currentUserCart = data
            console.log(this.currentUserCart);
            return this.currentUserCart
        }
     })     
    })    
    
  }
}


