import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import {FormGroup,FormControl,Validators,FormArray,FormBuilder} from '@angular/forms';
//import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 /*  loginForm = new FormGroup({
    'username': new FormControl( [Validators.required]),
    'password': new FormControl( [Validators.required])
  }); */
  emailid:any;
  formdata:any;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router) { 
     
    }

  ngOnInit():void {
    //console.log(this.loginForm.value);
    /* this.formdata = new FormGroup({
      emailid: new FormControl(Validators.required),
      passwd: new FormControl("")
   }); */
  }
  //get f() { return this.loginForm.controls; }
  /* onClickSubmit(data:any) {this.emailid = data.emailid;
  } */
}
