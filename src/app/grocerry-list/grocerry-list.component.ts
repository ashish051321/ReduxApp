import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getGrocItems } from '../store/reducers';

@Component({
  selector: 'app-grocerry-list',
  templateUrl: './grocerry-list.component.html',
  styleUrls: ['./grocerry-list.component.css']
})
export class GrocerryListComponent implements OnInit {

  items$: Observable<any>;
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.items$ = this.store.pipe(select(getGrocItems));
  }

  addItem(item) {
    this.store.dispatch({ type: 'addGroc', payload: item });
  }

  flushGroc() {
    this.store.dispatch({ type: 'flushGroc' });
  }

}
