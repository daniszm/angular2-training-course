import {
  AfterContentChecked, AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnInit,
  Output, ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-worker-card',
  templateUrl: './worker-card.component.html',
  styleUrls: ['./worker-card.component.scss'],
  encapsulation: ViewEncapsulation.Emulated

})
export class WorkerCardComponent implements OnInit {
/*  ngAfterViewInit(): void {
  }

  ngAfterContentInit(): void {
  }*/

  @Input() modelName;
  @Output() callEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  onClick(phone) {
      console.log(phone);
      this.callEvent.emit(phone);
  }

  ngOnInit() {
  }

}
