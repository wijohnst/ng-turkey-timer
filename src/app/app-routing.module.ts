import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { MealFormComponent } from "./meal-form/meal-form.component";
import { TrackMealComponent } from "./track-meal/track-meal.component";

const routes: Routes = [
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  { path: "welcome", component: WelcomeComponent },
  { path: "add_meal", component: MealFormComponent },
  { path: "track_meal", component: TrackMealComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
