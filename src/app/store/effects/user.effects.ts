import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects'
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import { GetUsersSuccess, EUserActions, GetUserSuccess, GetUser, GetUsers } from '../actions/user.actions';
import { IUser } from '../../models/user.interface';
import { selectUserList } from '../selectors/user.selector';
import { UserService } from 'src/app/services/user.service';

@Injectable()
export class UserEffects {
    @Effect()
    getUser$ = this._actions$.pipe(
        ofType<GetUser>(EUserActions.GetUser),
        map(action => action.payload),
        withLatestFrom(this._store.pipe(select(selectUserList))),
        switchMap(([id, users]) => {
            const selectedUser = users.filter((user: { _id: string; }) => {
                return user._id === id;
            })[0];
            return of(new GetUserSuccess(selectedUser));
        })
    );

    @Effect()
    getUsers$ = this._actions$.pipe(
        ofType<GetUsers>(EUserActions.GetUsers),
        switchMap(() => {
            return this._userService.getUsers();
        }),
        switchMap((user: IUser[]) => {
            return of(new GetUsersSuccess(user));
        })
    );
    constructor(
        private _userService: UserService,
        private _actions$: Actions,
        private _store: Store<IAppState>
    ) { }
}