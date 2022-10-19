import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatButtonModule } from "@angular/material";
import {
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatTooltipModule,
  MatChipsModule,
} from "@angular/material";

import { TtheaderComponent } from "./ttheader/ttheader.component";
import { LeafComponent } from "./leaf/leaf.component";
import { LeafwreathComponent } from "./leafwreath/leafwreath.component";
import { LeafWreathHeaderComponent } from "./leaf-wreath-header/leaf-wreath-header.component";
import { YearAuthorComponent } from "./year-author/year-author.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { MealFormComponent } from "./meal-form/meal-form.component";
import { TrackMealComponent } from './track-meal/track-meal.component';
import { NumberLeafComponent } from './number-leaf/number-leaf.component';
import { TimerSegmentComponent } from './timer-segment/timer-segment.component';

@NgModule({
  declarations: [
    AppComponent,
    LeafComponent,
    LeafwreathComponent,
    LeafWreathHeaderComponent,
    MealFormComponent,
    TtheaderComponent,
    WelcomeComponent,
    YearAuthorComponent,
    TrackMealComponent,
    NumberLeafComponent,
    TimerSegmentComponent,
  ],
  imports: [
    MatChipsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
