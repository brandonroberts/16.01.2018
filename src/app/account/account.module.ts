import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AccountListComponent } from './account-list/account-list.component';
import { AccountRoutesModule } from './account.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, AccountEffects } from './store';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutesModule,
    StoreModule.forFeature('account', reducers),
    EffectsModule.forFeature([AccountEffects])
  ],

  declarations: [AccountListComponent],
  providers: [],
  exports: []
})
export class AccountModule {}
