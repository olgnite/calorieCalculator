import { Component, Input, OnInit } from '@angular/core';
import { CalculatorCalorieService } from 'src/app/services/calculatorCalorie.service';
import { IProduct } from './../../interfaces/product.interface';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
    @Input() product: IProduct | undefined;
    public calculatedCalories: string | undefined;
    public isShowAmountGrams: boolean = false;

    constructor(private calculatorService: CalculatorCalorieService) {
    }

    public calculatedCalorieHandler(): void {
        this.calculatedCalories = (this.calculatorService
            .getDayGrams(
                +this.calculatorService.calories.getValue(),
                this.product.productCalorie,
                this.product.grams))
            .toFixed(2)
        this.isShowAmountGrams = true;
    }
}
