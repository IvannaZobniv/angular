import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserDetailsPageComponent } from './pages/user-details-page/user-details-page.component';
import { UsersComponent } from './components/users/users.component';
import {UserComponent} from "./components/user/user.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";


@NgModule({
  declarations: [
    UserPageComponent,
    UserDetailsPageComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule {
  constructor() {
    console.log('UserModule');
  }
}
