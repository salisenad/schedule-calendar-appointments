import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleContainerComponent } from './schedule-container.component';
// import { TodoComponent } from './todo.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleContainerComponent
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulContainerRoutingModule { }
