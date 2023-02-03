import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CalculatorDailyCalorieComponent } from './components/calculator-daily-calorie/calculator-daily-calorie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DailyCalculatorService } from './services/dailyCalculator.service';
import { HttpClientModule } from "@angular/common/http";
import { ProductsListComponent } from './components/products-list/products-list.component';
import { RequestService } from './services/request.service';
import { FormOptionsComponent } from './components/form-options/form-options.component';
import { ValidationComponent } from './components/validation/validation.component';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        HeaderComponent,
        SidebarComponent,
        CalculatorDailyCalorieComponent,
        ProductsListComponent,
        FormOptionsComponent,
        ValidationComponent
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
        DailyCalculatorService,
        RequestService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
