import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fbFormGroup = this.fb.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    mobile:['',Validators.required],
    passwd:['',[Validators.required,Validators.minLength(6)]],
  });
  constructor(private fb: FormBuilder, private router: Router, private http:HttpClient) { }

  ngOnInit(): void {
  }

  async register(){
    const data = this.fbFormGroup.value;
    const url = "http://localhost:3000/addUser";

    await this.http.post(url,data).toPromise();
    this.router.navigate(['loginpage']);
  }

}
