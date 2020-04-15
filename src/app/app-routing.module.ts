import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import {provideRoutes}  from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { CreateArticleComponent } from './create-article/create-article.component';

const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'article/:id',
    component: ArticleComponent
  },
  {
    path: 'create-article',
    component: CreateArticleComponent
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
