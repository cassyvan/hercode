import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { NgModule, SecurityContext } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown'; 
import { HttpClientModule, HttpClient } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NavBarComponent} from './components/navbar/navbar.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './pages/home/home.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

const AppRoutes: Routes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    HomeComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClickOutsideModule,
    RouterModule.forRoot(AppRoutes), 
    HttpClientModule, 
    MarkdownModule.forRoot({ loader: HttpClient, sanitize: SecurityContext.NONE})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
