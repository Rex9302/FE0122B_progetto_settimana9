import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { CompletedComponent } from './completed/completed.component';
import { Route, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';

const routes:Route[] = [
  {
    path:'',
    component:TodosComponent
  },
  {
    path:'Completati',
    component:CompletedComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    CompletedComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
