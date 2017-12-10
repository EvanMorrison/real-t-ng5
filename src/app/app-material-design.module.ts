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
    MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule,
  ],
  exports: [
    MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule,
  ],
  declarations: []
})
export class AppMaterialDesignModule { }
