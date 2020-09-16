import { createAction, props } from '@ngrx/store';

export const LOGIN = createAction(
    '[Login Page] Login',
    props<{user}>()
)
export const LOGOUT = createAction('[App Component] Logout');
export const REFRESH = createAction('[App Component] Refresh');