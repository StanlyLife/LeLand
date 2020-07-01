import { PlansComponent } from './plans/plans.component';
import { FeatureComponent } from './features/features.component';
import { TrustedComponent } from './trusted/trusted.component';
import { NavComponent } from './navigation/nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TrustedComponent,
    FeatureComponent,
    PlansComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
