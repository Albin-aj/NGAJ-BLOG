import { Component, EventEmitter, OnInit, Output, ɵcoerceToBoolean } from '@angular/core';
import { CommonSeviceService } from 'src/app/sevices/common-sevice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  visible:boolean = true

  @Output() show = new EventEmitter<boolean>()

   addNewValue(){
    this.visible=!this.visible
     this.show.emit(this.visible)
   }


  constructor(public menButton:CommonSeviceService){}
  ngOnInit(): void {}

}
