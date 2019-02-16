import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import {provideRoutes}  from '@angular/router';

const routes = [
  {
    path: '',
    component: HomeComponent
  },
  
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ enableTracing: true }),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})


export class AppRoutingModule { }
