import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, Routes} from '@angular/router';
import { Member1Component } from './member1/member1.component';
import { Member2Component } from './member2/member2.component'

const appRouter : Routes = [
  {path: '',component: Member1Component},
  {path: 'member1',component: Member1Component},
  {path: 'member2/:index',component: Member2Component}
];

@NgModule({
  declarations: [
    AppComponent,
    Member1Component,
    Member2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
