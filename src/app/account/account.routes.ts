import { CanLoad, RouterModule } from '@angular/router';

import { AccountListComponent } from './account-list/account-list.component';

const ACCOUNT_ROUTES = [{ path: '', component: AccountListComponent }];

export const AccountRoutesModule = RouterModule.forChild(ACCOUNT_ROUTES);
