import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './user/signin.component';
import { AuthGuard } from './user/auth-guard.service';

import { AppMaterialDesignModule } from './app-material-design.module';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialDesignModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent },
      { path: 'signin', component: SignInComponent },
      { 
        path: 'rt', 
        canLoad: [ AuthGuard ],
        loadChildren: 'app/mainContainer/main-container.module#MainContainerModule',
      },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    SignInComponent,
    HomeComponent,
  ]
})
export class AppRoutingModule { }
