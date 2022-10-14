import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatButtonModule } from "@angular/material";

import { MatSliderModule } from "@angular/material";
import { TtheaderComponent } from "./ttheader/ttheader.component";
import { LeafComponent } from "./leaf/leaf.component";
import { LeafwreathComponent } from "./leafwreath/leafwreath.component";
import { LeafWreathHeaderComponent } from "./leaf-wreath-header/leaf-wreath-header.component";
import { YearAuthorComponent } from "./year-author/year-author.component";
import { WelcomeComponent } from "./welcome/welcome.component";

@NgModule({
  declarations: [
    AppComponent,
    TtheaderComponent,
    LeafComponent,
    LeafwreathComponent,
    LeafWreathHeaderComponent,
    YearAuthorComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
