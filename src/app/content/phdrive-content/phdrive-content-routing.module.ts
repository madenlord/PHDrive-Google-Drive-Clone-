import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhdriveContentComponent } from './phdrive-content.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    children: [
      {
        path: '',
        component: PhdriveContentComponent
      },
      {
        path: ':path',
        component: PhdriveContentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhdriveContentRoutingModule { }
