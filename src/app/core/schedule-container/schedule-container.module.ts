import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulContainerRoutingModule } from './schedule-container-routing.module';
import { ScheduleContainerComponent } from './schedule-container.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    ScheduleContainerComponent,
    ModalDialogComponent
  ],
  imports: [
    CommonModule,
    SchedulContainerRoutingModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
  ],
  exports: [
    ScheduleContainerComponent
  ]
})
export class ScheduleContainerModule { }
