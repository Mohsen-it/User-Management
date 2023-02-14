import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule}from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { UsersModule } from './users/users.module';
import { CreateUserComponent } from './createUser/create-user.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from 'src/welcome/welcome.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CreateUserComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
     
    //general path
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
      
    ]),
    UsersModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
           loader: {
               provide: TranslateLoader,
               useFactory: HttpLoaderFactory,
               deps: [HttpClient]
           }
       }),
    StoreModule.forRoot({}, {})

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
