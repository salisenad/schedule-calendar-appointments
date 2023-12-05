import { Component, OnInit } from '@angular/core';
import { ScheduleDateService } from '../shared/schedule-date.service';
import { Store } from '@ngrx/store';
import { State } from './../../core/appointments/appointments.reducer';
import * as AppointmentActions from '../../../app/core/appointments/appointments.actions';
import { MatDialog } from '@angular/material/dialog';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { Appointment } from '../appointments/models/appointment.object';
import { Viewing } from '../appointments/models/viewing.object';
import { Day } from '../appointments/models/day.object';

@Component({
  selector: 'app-schedule-container',
  templateUrl: './schedule-container.component.html',
  styleUrl: './schedule-container.component.css'
})
export class ScheduleContainerComponent implements OnInit {
  weekStart: Date = new Date()
  weekEnd: Date = new Date();
  selectedDate: Date = new Date();
  weekDays: Day[] = [];
  times: string[] = [];
  appointments: any[];

  constructor(private scheduleDateService: ScheduleDateService, private store: Store<State>, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.generateTimeSlots();
    this.loadAppointments();
    this.calculateWeek(new Date());
    this.scheduleDateService.selectedDate$.subscribe(selectedDate => {
      if (selectedDate) {
        this.selectedDate = selectedDate; 
        this.calculateWeek(selectedDate); 
      }
    });

  }

  loadAppointments(): void {
    this.store.dispatch(AppointmentActions.loadAppointments());
    this.store.select(state => state.appointments).subscribe(res => {
      this.appointments = res['appointments']['nodes'];
      console.log('Appointments from Store:', res);
    });
  }

  calculateWeek(referenceDate: Date): void {
    const startOfWeek = this.getStartOfWeek(new Date(referenceDate))
    this.weekStart = new Date(startOfWeek);
    this.weekEnd = new Date(startOfWeek);
    this.weekEnd.setDate(this.weekEnd.getDate() + 6);
    this.selectedDate = new Date(this.selectedDate);
    this.weekDays = Array.from({ length: 7 }, (_, index) => {
      const date = new Date(startOfWeek);
      date.setDate(date.getDate() + index);
      
      const isSelected = this.isSelectedDate(date, this.selectedDate);
  
      return { date, viewings: [], isSelected };
    });

    this.initializeViewings();
  }

  isSelectedDate(date: Date, selectedDate: Date): boolean {
    return date.getDate() === selectedDate.getDate() &&
           date.getMonth() === selectedDate.getMonth() &&
           date.getFullYear() === selectedDate.getFullYear();
  }
  
  getStartOfWeek(date: Date): Date {
    const tempDate = new Date(date);
    const day = tempDate.getDay();
    const diff = tempDate.getDate() - day;
    tempDate.setDate(diff);
    return tempDate;
  }

  initializeViewings(): void {
    this.weekDays.forEach(day => {
      day.viewings = this.times.map(time => {
        const appointmentsAtThisTime = this.appointments.filter(appointment => {
          const appointmentDate = new Date(appointment.date);
          return (
            appointmentDate.getDate() === day.date.getDate() &&
            appointmentDate.getMonth() === day.date.getMonth() &&
            appointmentDate.getFullYear() === day.date.getFullYear() &&
            appointmentDate.getHours() === this.parseTime(time).hours
          );
        });
  
        const viewingDetails: Appointment[] = appointmentsAtThisTime.map(appointment => ({
          ...appointment, 
          image: appointment.image || 'default_ image.jpg',
          time: time, 
        }));
  
        return {
          time: time,
          isScheduled: viewingDetails.length > 0,
          details: viewingDetails,
        };
      });
    });
  }


  generateTimeSlots(): void {
    this.times = [];
    for (let hour = 8; hour <= 20; hour++) {
      this.times.push(`${hour < 10 ? '0' + hour : hour}:00`);
    }
  }
  
  
  showAppointments(viewing: Viewing): void {
    this.dialog.open(ModalDialogComponent, {
      width: '800px', 
      data: viewing 
    });
  }
  
  parseTime(timeString: string): { hours: number, minutes: number } {
    const [hours, minutes] = timeString.split(':').map(Number);
    return { hours, minutes };
  }

  goToPreviousWeek() {
    this.calculateWeek(new Date(this.weekStart.setDate(this.weekStart.getDate() - 7)));
  }

  goToNextWeek() {
    this.calculateWeek(new Date(this.weekStart.setDate(this.weekStart.getDate() + 7)));
  }

  formatDate(date: Date): string {
    const day = date.getDate();
    return `${day}`;
  }
}
