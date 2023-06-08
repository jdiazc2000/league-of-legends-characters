import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltersComponent } from './shared/components/filters/filters.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { DataTableComponent } from './shared/components/data-table/data-table.component';


@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    WelcomePageComponent,
    NavbarComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
