import { Component, OnInit } from '@angular/core';
import { headers } from '../temp/data'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  headers = headers;
  
  constructor() {
    
   }

  ngOnInit() {
  }

}
