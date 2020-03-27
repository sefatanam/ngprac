import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatIconModule, MatBadgeModule, MatProgressBarModule,
  MatProgressSpinnerModule, MatToolbarModule, MatSidenavModule, MatMenuModule,
  MatListModule, MatDividerModule, MatGridListModule, MatExpansionModule,
  MatCardModule, MatTableModule, MatTabsModule, MatStepperModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatAutocompleteModule, MatDatepickerModule, MatNativeDateModule, MatSnackBarModule
} from '@angular/material';

const material = [
  MatButtonModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  MatTableModule,
  MatTabsModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule
];



@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
