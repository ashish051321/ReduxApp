import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromUserStore from '../app/store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'reduxApp1';
  store$:Observable<any>;

  constructor(private myStore:Store<any>){
    this.store$ = this.myStore.select(fromUserStore.getUserState);
  }

  ngOnInit(){
    this.myStore.subscribe(data =>{
      console.log("==== store emission ===");
      console.log(data);
    });

  }
  updateName(name) {
    console.log("============="+name.value);
   this.myStore.dispatch({type:'changename',payload:name.value});
  }

  incrementCount() {
    this.myStore.dispatch({type:'incrementclick'});
   
  }
}
