import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import * as data from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   emailid:any;
   passwd:any;
   formdata:any;
  
  
  constructor(
  private router: Router)
  {
    this.router.navigate(['login']);
  }
  title = 'taskmanager';
  
  ngOnInit() {
   
 }
 
}

