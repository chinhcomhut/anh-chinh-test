import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewbookComponent} from './viewbook/viewbook.component';


const routes: Routes = [{
  path: 'content/:id',
  component: ViewbookComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
