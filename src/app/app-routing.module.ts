import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutsComponent} from "./layouts/main-layouts/main-layouts.component";

const routes:Routes = [
  {path:'', component:MainLayoutsComponent, children:[
      {path:'', redirectTo:'auth/login', pathMatch:'full'},
      {path:'auth', loadChildren:()=>import('./modules/auth/auth.module').then(m=>m.AuthModule)},
      {path:'cars', loadChildren:()=>import('./modules/cars/cars.module').then(m=>m.CarsModule)}
    ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
