import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import {provideRoutes}  from '@angular/router';
import { ArticleComponent } from './article/article.component';

const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'article/:id',
    component: ArticleComponent
  }
  
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ useHash: true, enableTracing: true }),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})


export class AppRoutingModule { }
