import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { PhdriveNavbarComponent } from './navbar/phdrive-navbar/phdrive-navbar.component';
import { ToastrModule } from 'ngx-toastr';
import { PhdriveContentModule } from './content/phdrive-content/phdrive-content.module';

@NgModule({
  declarations: [
    AppComponent,
    PhdriveNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    PhdriveContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
