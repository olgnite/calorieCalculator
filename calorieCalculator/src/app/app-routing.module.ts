import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorDailyCalorieComponent } from './components/calculator-daily-calorie/calculator-daily-calorie.component';
import { MortgageCalculatorComponent } from "./components/mortgage-calculator/mortgage-calculator.component";

const routes: Routes = [
    { path: 'daily-rate', component: CalculatorDailyCalorieComponent },
	{ path: 'mortgage', component: MortgageCalculatorComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
