import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = ''
  title = 'simpleEcommerce';

  // handleResults(value : string){
  //   this.data = value
  //   console.log(this.data);
  // }
}
