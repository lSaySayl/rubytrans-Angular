import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "mercancia",
    component: MerchandiseComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
