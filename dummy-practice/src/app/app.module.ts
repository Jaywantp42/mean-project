import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { PgnotfoundComponent } from './pgnotfound/pgnotfound.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogoutModalComponent } from './logout-modal/logout-modal.component';
import { DetailsModalComponent } from './details-modal/details-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    RegisterComponent,
    HomepageComponent,
    ForgetpassComponent,
    PgnotfoundComponent,
    LogoutModalComponent,
    DetailsModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
