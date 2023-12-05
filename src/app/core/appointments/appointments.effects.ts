// appointments.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, tap } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as AppointmentActions from './appointments.actions';
import { ScheduleDateService } from '../shared/schedule-date.service';

@Injectable()
export class AppointmentEffects {
  loadAppointments$ = createEffect(() => this.actions$.pipe(
    ofType(AppointmentActions.loadAppointments),
    mergeMap(() => this.scheduleDateService.getMockAppointments().pipe(
      // tap(data => console.log('Data in Effect:', data)), // Log the data here
      map(res => AppointmentActions.loadAppointmentsSuccess({ data: res.data.appointments })),
      catchError(error => of(AppointmentActions.loadAppointmentsFailure({ error })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private scheduleDateService: ScheduleDateService
  ) {}
}
