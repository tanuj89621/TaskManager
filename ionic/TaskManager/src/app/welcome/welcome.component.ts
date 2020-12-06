import { Component, OnInit } from '@angular/core';
import * as data from '../data.json';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { 
    console.log(data);
  }

  ngOnInit(): void {
  }

}
