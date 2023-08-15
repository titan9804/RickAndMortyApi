import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FormSearchComponent } from './shared/components/form-search/form-search.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimatedBackgroundComponent } from './shared/animated-background/animated-background.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormSearchComponent,
    AnimatedBackgroundComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
