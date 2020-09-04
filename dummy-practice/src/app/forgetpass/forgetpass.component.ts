import { Component, OnInit } from '@angular/core';

import {FormBuilder,Validator, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router: Router,
    private http: HttpClient) { }
  
  alert:boolean = false;

  ngOnInit(): void {}

  fbFormGroup = this.fb.group({
    email:['',Validators.required],
    passwd:[''],
  });

  async changePass(){
    const data = this.fbFormGroup.value;

    //ajax call
    let url = 'http://localhost:3000/update-pwd';
    await this.http.post(url,data).toPromise();
    this.fbFormGroup.reset({});
    this.alert = true;
  }
  closeAlert(){
    this.alert = false;
  }
}
