import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainContainerComponent } from './main-container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CaseSetupComponent } from './case-setup/case-setup.component';
import { CaseListComponent } from './case-list/case-list.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainContainerComponent,
        children: [
          {
            path: 'dashboard',
            component: DashboardComponent
          },
          {
            path: 'casesetup',
            component: CaseSetupComponent
          },
          {
            path: 'caselist',
            component: CaseListComponent
          },
          { path: '**', redirectTo: '/home' }
        ]
      },
      
    ])
  ],
  declarations: [
    MainContainerComponent,
    DashboardComponent,
    CaseSetupComponent,
    CaseListComponent
  ]
})
export class MainContainerModule { }
