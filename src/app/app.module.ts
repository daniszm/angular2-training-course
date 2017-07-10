import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Pipe} from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {WavesPipe} from "./pipes/waves.pipe";
import { SearchPipe } from './pipes/search.pipe';
import { WorkerCardComponent } from './components/worker-card/worker-card.component';
import { SetColorDirective } from './directives/set-color.directive';
import {WorkersService} from "./services/workers.service";

@NgModule({
  declarations: [
    AppComponent,
    WavesPipe,
    SearchPipe,
    WorkerCardComponent,
    SetColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    WorkersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
