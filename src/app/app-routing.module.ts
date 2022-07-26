import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractsComponent } from './pages/contracts/contracts.component';

const routes: Routes = [
  { path: "", component: ContractsComponent },
  { path: "contract", component: ContractsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
