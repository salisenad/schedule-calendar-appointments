import { createAction, props } from '@ngrx/store';

export const loadAppointments = createAction(
  '[Appointments] Load Appointments'
);

export const loadAppointmentsSuccess = createAction(
  '[Appointments] Load Appointments Success',
  props<{ data: any }>()
);

export const loadAppointmentsFailure = createAction(
  '[Appointments] Load Appointments Failure',
  props<{ error: any }>()
);
