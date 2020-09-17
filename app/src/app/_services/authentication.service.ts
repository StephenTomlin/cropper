import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'
import { Store, select } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject$: BehaviorSubject<any>;
  public currentUser$: Observable<any>;


  constructor(
    private http: HttpClient,
    private _store: Store
  ) {
      this.currentUserSubject$ = this._store.pipe(select('user'))
    
    // this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentuser'))); // replace this with get from ngrx store
    this.currentUser$ = this.currentUserSubject$
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  public login(username, password) {
    return this.http
      .post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
      .pipe(
        map(user => {
            //set ngrx store user object to user.... for now local storage
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
          }
      ));
  }

  public logout() {
    //delete from ngrx store
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null)
  }
}
