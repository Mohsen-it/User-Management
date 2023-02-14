import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { UsersList } from './user-list.component';
import { FormControl, FormGroup, FormGroupName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserDetailsComponent } from '../details/details-user.component';
import { CreateUserComponent } from '../createUser/create-user.component';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { imageReducer } from './user.Reducer';



@NgModule({
  declarations: [  
    LoginComponent,
    UsersList,
    UserDetailsComponent,
  ],
  imports: [
   NgxPaginationModule,
    CommonModule, 
    FormsModule,ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'users', component: UsersList },
      { path: 'users/:id', component: UserDetailsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'create', component: CreateUserComponent },

  ]),TranslateModule,
  StoreModule.forFeature('User', {count:imageReducer})

  
]
}
)
export class UsersModule { }
