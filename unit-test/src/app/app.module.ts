import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
     AppComponent,
     TestComponent,
     MenuComponent
  ],
  imports: [
     HttpClientModule,
     FormsModule,
	 HttpModule,
     BrowserModule,
     AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{
}
