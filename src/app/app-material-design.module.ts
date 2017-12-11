import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatAutocompleteModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
         MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule,
         MatListModule, MatMenuModule, MatOptionModule, MatProgressBarModule,
         MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule,
         MatSidenavModule, MatTableModule, MatTabsModule, MatToolbarModule,
         MatTooltipModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatSidenavModule,
     MatToolbarModule,
  ],
  exports: [
    MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatSidenavModule,
     MatToolbarModule,
  ],
  declarations: []
})
export class AppMaterialDesignModule { }
