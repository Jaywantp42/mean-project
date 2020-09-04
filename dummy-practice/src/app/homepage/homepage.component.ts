import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { FormControl, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { LogoutModalComponent } from '../logout-modal/logout-modal.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  list:any=[];

  fbFormGroup=this.fb.group({
    /*qnum:[],*/
    quee:[],
    cat:[]
  });

  public q=new FormControl;

  constructor(private router: Router, private modalServices:NgbModal, private fb:FormBuilder, private http:HttpClient) { }



  ngOnInit(): void {
    this.disque();
    if (!sessionStorage.getItem('sid')) {
      this.router.navigate(['loginpage']);
    }
  }

  /*ngOnInit(){
    console.log("onin");
    this.disque();
  }*/

  async disque(){
    const url1="http://localhost:3000/disque";
    const result=await this.http.get(url1).toPromise();
    this.list=result;
    console.log(result)
  }

  async addQue(){
    const data=this.fbFormGroup.value;
    const url="http://localhost:3000/postque";

    await this.http.post(url, data).toPromise();

    this.fbFormGroup.reset();
    const resource = JSON.stringify(this.fbFormGroup.value);


  }

  logOut() {
    //open Modal
    this.modalServices.open(LogoutModalComponent,{
      centered:true,
    })
    /*sessionStorage.removeItem('sid');
    this.router.navigate(['loginpage']);*/
   
  }

}
