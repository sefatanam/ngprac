import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatIconModule, MatBadgeModule, MatProgressBarModule,
  MatProgressSpinnerModule, MatToolbarModule, MatSidenavModule, MatMenuModule,
  MatListModule, MatDividerModule, MatGridListModule, MatExpansionModule,
  MatCardModule, MatTableModule, MatTabsModule
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
  MatTabsModule
];



@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
