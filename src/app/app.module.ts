import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowMobilePlanComponent } from './show-mobile-plan/show-mobile-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowMobilePlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
