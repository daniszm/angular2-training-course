import { Injectable } from '@angular/core';

@Injectable()
export class WorkersService {
  items: any = [
    {name: "Joe", phone: 2929283},
    {name: "Will", phone: 2922213},
    {name: "Mark", phone: 2935223},
    {name: "Smith", phone: 9929283},
    {name: "Phiaal", phone: 65929283},
  ];
  constructor() { }

}
