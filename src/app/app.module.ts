import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';
import { ProjectsComponent } from './projects/projects.component';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    BoardComponent,
    LayoutComponent,
    ProjectsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
