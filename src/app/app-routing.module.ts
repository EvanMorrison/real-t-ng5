import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './user/signin.component';

import { AppMaterialDesignModule } from './app-material-design.module';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialDesignModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent },
      { path: 'signin', component: SigninComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    SigninComponent,
    HomeComponent
  ]
})
export class AppRoutingModule { }
