import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrl: './modal-dialog.component.css'
})
export class ModalDialogComponent implements OnInit{
  time: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    console.log('Data received in dialog:', this.data);
  }


  ngOnInit(): void {
    this.formatDate();
  }
  
  formatDate() {
    let date = new Date(this.data.details[0].date);
    this.time = date.getHours() ; 
  }


}
