import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';
import { UserDetailsComponent } from './user-details/user-details.component';
import { GrocerryListComponent } from './grocerry-list/grocerry-list.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', component: UserDetailsComponent },
  { path: 'groc', component: GrocerryListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    GrocerryListComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffects]),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
