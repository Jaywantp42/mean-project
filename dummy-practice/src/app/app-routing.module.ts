import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { PgnotfoundComponent } from './pgnotfound/pgnotfound.component';

const routes: Routes = [{path:'loginpage', component:LoginpageComponent},
                        {path:'register', component:RegisterComponent},
                        {path:'forgetpass',component:ForgetpassComponent},
                        {path:'homepage', component:HomepageComponent,
                          children:[
                            
                          ],
                        },
                        {path:'', redirectTo:'/loginpage', pathMatch:'full'},
                        {path:'**',component: PgnotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
