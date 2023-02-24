import { Component, SettableSignal } from '@angular/core';
import {computed, signal} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'signalsRepo';
  state: SettableSignal<boolean> = signal(false);

  ngOnInit(){

  }

  buttonSelected(){
    this.state.set(true);
  }
}
