import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import {IUser} from '../../models/user.interface';
import { IAppState } from '../../store/state/app.state';
import { selectSelectedUser } from '../../store/selectors/user.selector';
import { GetUser } from '../../store/actions/user.actions';


@Component({
  selector: 'app-user-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})

export class UsersDetailsComponent implements OnInit {
  user$ = this._store.pipe(select(selectSelectedUser));
  user: IUser;
  constructor(
    private _store: Store<IAppState>,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._store.dispatch(new GetUser(this._route.snapshot.params.id));
    this.user$.subscribe(data => this.user = data)
  }
}