import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatCardModule,
  MatDividerModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
  ],
})
export class MaterialModule {}
