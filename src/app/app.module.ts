import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroDataComponent } from './hero-data/hero-data.component';
import { SeachComponent } from './seach/seach.component';
import { HabbitsComponent } from './habbits/habbits.component';
import { DailyActivitiesComponent } from './daily-activities/daily-activities.component';
import { TasksComponent } from './tasks/tasks.component';
import { AwardsComponent } from './awards/awards.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroDataComponent,
    SeachComponent,
    HabbitsComponent,
    DailyActivitiesComponent,
    TasksComponent,
    AwardsComponent,
    InventoryComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
