import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { User } from '../_models/user.model';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';


import * as userActions from '../_actions/user.actions';
import { from, Observable, of } from 'rxjs';
import { catchError, delay, map, switchMap } from 'rxjs/operators';

export type Action = userActions.All;


@Injectable()
export class UserEffects {
    constructor(
        private actions: Actions,
        private afAuth: AngularFireAuth
    ) { }

    @Effect()
    public getUser: Observable<Action> = this.actions
    .pipe(
        map((action: userActions.GetUser) => action.payload),
        switchMap(payload => this.afAuth.authState),
        delay(2000), // delay to show loading spinner, delete me!
        map(authData => {
            if (authData) {
                const user = new User(authData.uid, authData.displayName);
                return new userActions.Authenticated(user);
            } else {
                return new userActions.NotAuthenticated();
            }
        }),
        catchError(err => of(new userActions.AuthError()))
    )

    @Effect()
    login: Observable<Action> = this.actions
    .pipe(
        map((action: userActions.Login) => action.payload),
        switchMap(payload => {
            return from(this.firebaseLogin());
        }),
        map(cred => {
            // successful login
            return new userActions.GetUser();
        }),
        catchError(err => of(new userActions.AuthError()))
    )

    @Effect
    logout:  Observable<Action> = this.actions.pipe(
        map((action: userActions.Logout) => action.payload),
        switchMap(payload => of(this.afAuth.signOut())),
        map(authData => new userActions.NotAuthenticated),
        catchError(err => of(new userActions.AuthError({ error: err.message })));
    )

    /// Helper Method
    private firebaseLogin(): Promise<any> {
        const provider = new firebase.auth.EmailAuthProvider();
        return this.afAuth.signInWithPopup(provider)
    }

}