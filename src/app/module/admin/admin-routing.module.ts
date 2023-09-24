import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashbordComponent } from './components/admin-dashbord/admin-dashbord.component';
import { HomeComponent } from './components/home/home.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { SalaryManagementComponent } from './components/salary-management/salary-management.component';
// Lazy loading 
const routes: Routes = [
  {
    path: '',
    component: AdminDashbordComponent,  
    children: [
      { path: 'home', component: HomeComponent },  
      { path: 'employee', component: AddEmployeeComponent },  
      { path: 'salary', component: SalaryManagementComponent },    
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
