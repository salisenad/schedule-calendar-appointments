import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './core/appointments/appointments.reducer';
import * as AppointmentActions from './../app/core/appointments/appointments.actions';
// import { AppointmentObject } from './core/appointments/models/appointment.object';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private store: Store<State>) { }
  appointments: any[];
  ngOnInit() {
    this.store.dispatch(AppointmentActions.loadAppointments());

    this.store.select(state => state.appointments).subscribe(res => {
      this.appointments = res['appointments']['nodes']
      // this.appointments = appointments
      console.log('this.appointments', this.appointments)
      console.log('Appointments from Store:', res);
    });
  }
}
