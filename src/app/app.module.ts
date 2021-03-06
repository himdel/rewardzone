import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AvailablePointsComponent } from './available-points/available-points.component';
import { GiveRewardComponent } from './give-reward/give-reward.component';

import { PointStoreService } from './point-store.service';


@NgModule({
  declarations: [
    AppComponent,
    AvailablePointsComponent,
    GiveRewardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    PointStoreService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
