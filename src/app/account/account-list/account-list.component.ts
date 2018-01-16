import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../core/dataservices/account.service';
import * as fromStore from '../store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html'
})
export class AccountListComponent implements OnInit {
  accountFromStore$: Observable<any[]>;
  accountLoading$: Observable<boolean>;

  constructor(private store: Store<fromStore.AccountState>) {}

  ngOnInit() {
    this.accountFromStore$ = this.store.select(fromStore.getAllAccountItems);
    this.accountLoading$ = this.store.select(fromStore.getAccountLoading);

    this.store.dispatch(new fromStore.LoadAccountAction()); // holt die efffektiven daten
  }
}
