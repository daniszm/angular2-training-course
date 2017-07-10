import { Component } from '@angular/core';
import {WorkersService} from "./services/workers.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myName = 'Danisz M';
  today: number = Date.now();
  access: boolean = true;
  searchByName;
  userPhone;
  myColor;
  items;


  constructor(workerService: WorkersService) {

    workerService.getItemFromServer().subscribe((res)=>{
        this.items = res.json().data;
      })
  }

  showPhone(phone: number) {
    console.log(phone);
  }

  callTo(phone: number){
    this.userPhone = phone;
  }
}
