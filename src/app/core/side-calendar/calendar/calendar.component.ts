import { Component } from '@angular/core';
import { ScheduleDateService } from '../../shared/schedule-date.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  selectedDate: Date | null = new Date();

  constructor(private scheduleDateService: ScheduleDateService) {}


  onDateSelected(event: Date): void {
    console.log('apovjennDiqka', event)
    this.selectedDate = event;
    this.scheduleDateService.updateSelectedDate(this.selectedDate);

    console.log('Selected date:', this.selectedDate);
  }
}
