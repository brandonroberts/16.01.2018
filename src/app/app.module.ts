import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {
  LoadChildren,
  PreloadAllModules,
  RouterModule,
  Routes
} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

const APP_ROUTES: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'account',
    loadChildren: './account/account.module#AccountModule'
  }
];

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);

@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [BrowserModule, AppRoutes],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
