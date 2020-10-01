import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { User } from './_models/user.model';
import * as userActions from './_actions/user.actions';
import { Observable } from 'rxjs';

interface AppState {
  user: User;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user$: Observable<User>;

  constructor(private store: Store<AppState>){}

  ngOnInit() {
    this.user$ = this.store.select('user');

    this.store.dispatch(new userActions.GetUser());
  }

  login() {
    this.store.dispatch(new userActions.Login())
  }

  logout() {
    this.store.dispatch(new userActions.Logout())
  }
}
