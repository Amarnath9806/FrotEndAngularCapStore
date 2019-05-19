import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RefundComponent } from './refund/refund.component';
import { DetailsComponent } from './details/details.component';
import{ ReactiveFormsModule, FormsModule } from '@angular/forms'
import { Routes,  RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: "details", component: DetailsComponent},
  {path:"refund",component:RefundComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    RefundComponent,
   
    DetailsComponent,
    LoginComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
