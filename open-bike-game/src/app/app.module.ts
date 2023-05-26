import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditRaceComponent } from './edit-race/edit-race.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { RaceViewComponent } from './components/race-view/race-view.component';
import { RaceComponent } from './components/race/race.component';

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
