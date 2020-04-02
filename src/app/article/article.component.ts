import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/commonHttp.service';
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articleData: any;

  constructor(private data: DataService, private http: HttpClient) { }

  ngOnInit() {
    this.articleData = {
      title: 'Some tay tay stuff',
      body: 'Some tay tay story',
      author: 'Some pikachu player'
    }
  }

  getRequest(link, param) {
    this.data.getRequest(link)
      .then((_response: any) => {
        if(!_.isEmpty(_response)) {
          const _tempData: Object[] = [];
          _tempData['response'] = _response;
          this[param] = _tempData['response'].response;
        }
      })
  }

}
