import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EmployeeDetail } from '../_models/EmployeeDetail';
import { UserLoginDetail } from '../_models/UserLoginDetail';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = environment.apiUrl;
  employee: EmployeeDetail[] = []
  memberCache = new Map();
  userLoginDetail: UserLoginDetail | undefined;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.authService.currentUser$.pipe(take(1)).subscribe(user => {
      this.userLoginDetail = user;      
    })
   }

   getAllEmployees(): Observable<EmployeeDetail[]>{
    return this.http.get<EmployeeDetail[]>(this.baseUrl + '/Employee/GetAllEmployees')
}

addEmployee(addEmployeeRequest: EmployeeDetail): Observable<EmployeeDetail>{
  return this.http.post<EmployeeDetail>(this.baseUrl + '/Employee',addEmployeeRequest)
}

updateEmployee(Id: number, updatedEmployeeData: any): Observable<any> {  
  return this.http.put(this.baseUrl + '/Employee' + {Id}, updatedEmployeeData);
}
}
