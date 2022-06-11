import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { PhdriveNavbarComponent } from './navbar/phdrive-navbar/phdrive-navbar.component';
import { PhdriveContentComponent } from './content/phdrive-content/phdrive-content.component';

@NgModule({
  declarations: [
    AppComponent,
    PhdriveNavbarComponent,
    PhdriveContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
