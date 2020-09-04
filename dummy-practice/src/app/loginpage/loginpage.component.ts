import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  fbFormGroup = this.fb.group({
    email:['', Validators.required],
    passwd:['',Validators.required],
  });

  constructor(private fb: FormBuilder,
    private router: Router,
    private http: HttpClient) { }

  public uiInvalidCredential = false;  
  ngOnInit(): void {
  }

  async login() {
    const data =this.fbFormGroup.value;

    //ajax call
    const url = "http://localhost:3000/auth-user";
    const results: any =  await this.http.post(url, data).toPromise();
    if(results.operation){
      sessionStorage.setItem('sid','true');
      this.router.navigate(['homepage']);
    } else{
      this.uiInvalidCredential = true;
      this.fbFormGroup.reset({});
    }
  }

}
