import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MainMenuComponent } from './components';
import { NgModule } from '@angular/core';
import { RaceModule } from './race/race.module';

@NgModule({
  declarations: [AppComponent, MainMenuComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, RaceModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
