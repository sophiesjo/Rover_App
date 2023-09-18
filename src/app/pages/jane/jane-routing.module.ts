import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JanePage } from './jane.page';

const routes: Routes = [
  {
    path: '',
    component: JanePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JanePageRoutingModule {}
