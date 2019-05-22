import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromUserStore from '../../app/store/reducers';
import * as fromUserActions from '../../app/store/actions/user.action';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

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
    // console.log("============="+name.value);
   this.myStore.dispatch(new fromUserActions.UpdateNameAction(name.value));
  }

  incrementCount() {
    this.myStore.dispatch(new fromUserActions.IncrementClickAction);
   
  }
}
