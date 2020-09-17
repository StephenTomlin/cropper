import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { User } from '../_models/user.model';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';


import * as userActions from '../_actions/user.actions';
import { Observable } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';

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
            }
        })
    )

}