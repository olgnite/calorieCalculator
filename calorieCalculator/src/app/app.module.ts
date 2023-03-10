import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CacheService } from './shared/services/cache.service';
import { RequestService } from './shared/services/request.service';
import { CalculatorCalorieService } from './modules/product-module/services/calculator-calorie.service';
import { SearchPipe } from "./shared/pipes/search.pipe";
import { MortgageCalculatorComponent } from './components/mortgage-calculator/mortgage-calculator.component';


@NgModule({
	declarations: [
		AppComponent,
		LayoutComponent,
		HeaderComponent,
		SidebarComponent,
		SearchPipe,
		MortgageCalculatorComponent,
	],
	imports: [
		CommonModule,
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
	],
	providers: [
		CalculatorCalorieService,
		RequestService,
		CacheService
	],
	exports: [
		CommonModule
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
