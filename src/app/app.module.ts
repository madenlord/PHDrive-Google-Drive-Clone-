import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { PhdriveNavbarComponent } from './navbar/phdrive-navbar/phdrive-navbar.component';
import { PhdriveContentComponent } from './content/phdrive-content/phdrive-content.component';
import { PhdriveContentFoldersComponent } from './content/phdrive-content/phdrive-content-folders/phdrive-content-folders.component';
import { PhdriveContentFilesComponent } from './content/phdrive-content/phdrive-content-files/phdrive-content-files.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    PhdriveNavbarComponent,
    PhdriveContentComponent,
    PhdriveContentFoldersComponent,
    PhdriveContentFilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
