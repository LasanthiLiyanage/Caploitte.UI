import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ReplaySubject, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserLoginDetail } from '../_models/UserLoginDetail';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // baseUrl = environment.apiUrl;
  // private currentUserSource = new ReplaySubject<UserLoginDetail>(1);
  // currentUser$ = this.currentUserSource.asObservable();

  private baseUrl:string = "https://localhost:7261/api/"


  constructor(private router: Router, private http : HttpClient) { }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  // login({ email, password }: any): Observable<any> {
  //   if (email === 'admin@gmail.com' && password === 'admin123') {
  //     this.setToken('abcdefghijklmnopqrstuvwxyz');
  //     return of({ name: 'Lasanthi', email: 'admin@gmail.com' });
  //   }
  //   return throwError(new Error('Failed to login'));
  // }

  login(userObj:any){
    //return this.http.post<any>(`${this.baseUrl}`)
  }

  getDecodedToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  
}
