import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditRaceComponent, MainMenuComponent, RaceComponent, RaceViewComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    EditRaceComponent,
    MainMenuComponent,
    RaceViewComponent,
    RaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
