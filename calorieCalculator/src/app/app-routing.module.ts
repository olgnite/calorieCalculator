import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MortgageCalculatorComponent } from "./components/mortgage-calculator/mortgage-calculator.component";

const routes: Routes = [
	{path: 'mortgage', component: MortgageCalculatorComponent},
	{
		path: 'daily-rate',
		loadChildren: () => import('./modules/product-module/product.module').then((module) => module.ProductModule)
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
