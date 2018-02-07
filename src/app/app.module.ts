import { EmployeeComponent } from './employee.component';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     RouterModule.forRoot([
     {path:'main',component:EmployeeComponent},
     {path:'list',component:ListComponent},
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
