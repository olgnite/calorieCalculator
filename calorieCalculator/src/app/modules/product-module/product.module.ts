import { NgModule } from "@angular/core";
import {
	CalculatorDailyCalorieComponent
} from "./components/calculator-daily-calorie/calculator-daily-calorie.component";
import { ProductsListComponent } from "./components/products-list/products-list.component";
import { FormOptionsComponent } from "./components/form-options/form-options.component";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../../app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CalculatorCalorieService } from "./services/calculator-calorie.service";
import { RouterModule, Routes } from "@angular/router";
import { AppModule } from "../../app.module";
import { CommonModule } from "@angular/common";
import { ValidationComponent } from "./components/validation/validation.component";


const routes: Routes = [
	{path: '', component: CalculatorDailyCalorieComponent}
]

@NgModule({
	declarations: [
		CalculatorDailyCalorieComponent,
		ProductsListComponent,
		FormOptionsComponent,
		ProductCardComponent,
		ValidationComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule.forChild(routes),
	],
	providers: [
		CalculatorCalorieService,
	],
})
export class ProductModule {

}
