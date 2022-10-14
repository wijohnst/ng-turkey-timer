import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatSliderModule } from "@angular/material";
import { TtheaderComponent } from "./ttheader/ttheader.component";
import { LeafComponent } from './leaf/leaf.component';
import { LeafwreathComponent } from './leafwreath/leafwreath.component';
import { LeafWreathHeaderComponent } from './leaf-wreath-header/leaf-wreath-header.component';

@NgModule({
  declarations: [AppComponent, TtheaderComponent, LeafComponent, LeafwreathComponent, LeafWreathHeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
