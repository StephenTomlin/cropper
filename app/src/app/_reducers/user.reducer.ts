// import { state } from '@angular/animations';
// import { createReducer, on } from '@ngrx/store';
// import { LOGIN, LOGOUT, REFRESH } from '../_actions/user.actions';

// export const initialState = {
//     currentUser: null,
//     languageCode: null,
//     tenantId: null,
    
// }

// const _userReducer = createReducer(
//     initialState,
//     on(LOGIN, (state) => initialState),
//     on(LOGOUT, (state) => initialState)
// )

// export function userReducer(state, action) {
//     return _userReducer(state,action)
// }

import * as userActions from '../_actions/user.actions';
import { User } from '../_models/user.model';

export type Action = userActions.All;

const defualtUser = new User(null, 'GUEST');

//Reducer function

export function userReducer(state: User = defualtUser, action: Action) {
    switch(action.type) {
        case userActions.GET_USER:
            return { ...state, loading: true };

        case userActions.AUTHENTICATED:
            return { ...state, ...action.payload, loading: false };

        case userActions.NOT_AUTHENTICATED:
            return { ...state, ...defualtUser, loading: false };

        case userActions.LOGIN:
            return { ...state, loading: true };

        case userActions.AUTH_ERROR:
            return {...state, ...action.payload, loading: false };

        case userActions.LOGOUT:
            return { ...state, loading: true };
    }    
}