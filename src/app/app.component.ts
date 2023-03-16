import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  openClose = true
additem(value:boolean){
this.openClose=value
}
// console.log(this.visible);

}
