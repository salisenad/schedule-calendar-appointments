import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './core/header/header.component';
import { SideCalendarComponent } from './core/side-calendar/side-calendar.component';
import { ScheduleContainerModule } from './core/schedule-container/schedule-container.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatRippleModule } from '@angular/material/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentEffects } from './core/appointments/appointments.effects';
// import { environment } from '../environments/environment';
import { reducer } from './core/appointments/appointments.reducer';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { MatIconModule } from '@angular/material/icon';
import { CalendarComponent } from './core/side-calendar/calendar/calendar.component';
import { NextViewingComponent } from './core/side-calendar/next-viewing/next-viewing.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideCalendarComponent,
    CalendarComponent,
    NextViewingComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    AppRoutingModule,
    ScheduleContainerModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatInputModule,
    MatRippleModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25}),
    HttpClientModule,
    EffectsModule.forRoot([AppointmentEffects]),
    StoreModule.forRoot({ appointments: reducer }),
    ServerModule,
    MatIconModule,
    MatSelectModule,
    ServerTransferStateModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
