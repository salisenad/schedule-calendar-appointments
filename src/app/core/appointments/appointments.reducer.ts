import { createReducer, on } from '@ngrx/store';
import * as AppointmentActions from './appointments.actions';

export const appointmentsFeatureKey = 'appointments';

export interface State {
  appointments: any[];
  error: any;
}

export const initialState: State = {
  // initial state values
  appointments: [],
  error: undefined
};

export const reducer = createReducer(
  initialState,
  on(AppointmentActions.loadAppointmentsSuccess, (state, { data }) => {
    console.log('dataaaneREDUCER', data)
    return { ...state, appointments: data };
  }),
  on(AppointmentActions.loadAppointmentsFailure, (state, action) => {
    return { ...state, error: action.error };
  }),
);
