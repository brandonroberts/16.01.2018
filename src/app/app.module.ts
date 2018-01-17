import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {
  LoadChildren,
  PreloadAllModules,
  RouterModule,
  Routes,
} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';

const APP_ROUTES: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'account',
    loadChildren: './account/account.module#AccountModule',
  },
];

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);

@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    AppRoutes,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    CoreModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
