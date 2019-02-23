import { AppTableComponent } from './app-table/app-table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';

const routes: Routes = [
    {
      path: '', component: AppDashboardComponent
    },
    {
      path: 'table', component: AppTableComponent
    }
  ];

@ NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
