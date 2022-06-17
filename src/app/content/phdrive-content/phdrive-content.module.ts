import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhdriveContentRoutingModule } from './phdrive-content-routing.module';
import { PhdriveContentComponent } from './phdrive-content.component';
import { PhdriveContentFoldersComponent } from './phdrive-content-folders/phdrive-content-folders.component';
import { PhdriveContentFilesComponent } from './phdrive-content-files/phdrive-content-files.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PhdriveContentComponent,
    PhdriveContentFoldersComponent,
    PhdriveContentFilesComponent
  ],
  imports: [
    CommonModule,
    PhdriveContentRoutingModule,
    FormsModule
  ],
  exports: [
    PhdriveContentComponent,
    PhdriveContentFoldersComponent,
    PhdriveContentFilesComponent
  ]
})
export class PhdriveContentModule { }
