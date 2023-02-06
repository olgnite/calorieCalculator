import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorDailyCalorieComponent } from './components/calculator-daily-calorie/calculator-daily-calorie.component';
import { FormOptionsComponent } from './components/form-options/form-options.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ValidationComponent } from './components/validation/validation.component';
import { CacheService } from './services/cache.service';
import { RequestService } from './services/request.service';
import { CalculatorCalorieService } from './services/calculatorCalorie.service';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        HeaderComponent,
        SidebarComponent,
        CalculatorDailyCalorieComponent,
        ProductsListComponent,
        FormOptionsComponent,
        ValidationComponent,
        ProductCardComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        CalculatorCalorieService,
        RequestService,
        CacheService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
