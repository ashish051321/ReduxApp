import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store<any>) {

  }
  printStore() {
    this.store.subscribe(data => {
      console.log('********* Store **************');
      console.log(data);
    })
  }

}
