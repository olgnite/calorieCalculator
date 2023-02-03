import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CalculatorDailyCalorieComponent } from './components/calculator-daily-calorie/calculator-daily-calorie.component';

const routes: Routes = [
    // { path: '', component: AppComponent },
    { path: 'daily-rate', component: CalculatorDailyCalorieComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
