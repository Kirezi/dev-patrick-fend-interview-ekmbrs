import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, UserComponent],
  bootstrap: [AppComponent],
  providers: [UserService],
})
export class AppModule {}
