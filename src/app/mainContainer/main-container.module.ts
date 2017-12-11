import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainContainerComponent } from './main-container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CaseSetupComponent } from './case-setup/case-setup.component';
import { CaseListComponent } from './case-list/case-list.component';
import { AppMaterialDesignModule } from '../app-material-design.module';
import { DrawerContentComponent } from './dashboard/drawer/drawer-content.component';
import { CaseFocusComponent } from './dashboard/caseFocus/case-focus.component';
import { CaseListResolverService } from './case-list-resolver.service';
import { CaseService } from './case.service';


@NgModule({
  imports: [
    CommonModule,
    AppMaterialDesignModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainContainerComponent,
        resolve: { cases: CaseListResolverService },
        children: [
          {
            path: '',
            component: DashboardComponent,
            pathMatch: 'full'
          },
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
        ]
      },
      { path: '**', component: MainContainerComponent }
      
    ])
  ],
  declarations: [
    MainContainerComponent,
    DashboardComponent,
    CaseSetupComponent,
    CaseListComponent,
    DrawerContentComponent,
    CaseFocusComponent
  ],
  providers: [CaseListResolverService, CaseService]
})
export class MainContainerModule { }
