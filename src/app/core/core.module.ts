import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AccountService } from './dataservices/account.service';
import { HttpWrapperService } from './services/httpWrapper.service';

@NgModule({
  imports: [CommonModule],
  exports: [],
  providers: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [AccountService, HttpWrapperService]
    };
  }
}
