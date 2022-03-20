import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgCnqModule} from "../../../../ngcnq.module";
import {State} from "../../../../types/state.type";

export const defState = {
  name: 'Arnold',
  lastname: 'Schwartzenegger',
  age: 70,
  address: {
    citizen: true,
    street: 'Beverly Hills',
    city: 'Hollywood'
  }
};
export type AppState = typeof defState;


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      NgCnqModule.forRoot(defState)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
