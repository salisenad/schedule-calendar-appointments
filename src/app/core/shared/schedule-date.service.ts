import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleDateService {
  private selectedDateSubject = new BehaviorSubject<Date | null>(null);
  selectedDate$ = this.selectedDateSubject.asObservable();


  private mockDataUrl = '../../../assets/mock-data/mock-appointments.json';

  constructor(private httpClient: HttpClient) {}

  updateSelectedDate(date: Date): void {
    console.log('dateeeeNeSErvice', date);
    this.selectedDateSubject.next(date);
  }


  getMockAppointments(): Observable<any> {
    return this.httpClient.get(this.mockDataUrl).pipe(
    );
  }
  
}
