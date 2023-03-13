import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { IProduct } from '../../../../shared/interfaces/product.interface';
import { DEFAULT_CALORIE } from "../../../../tokens/defaultCalorie.token";
import { BehaviorSubject, Observable, take, takeUntil, tap } from "rxjs";
import { DestroyService } from "../../../../shared/services/destroy.service";
import { CalculatorCalorieService } from "../../services/calculator-calorie.service";

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		DestroyService
	]
})
export class ProductCardComponent {
	@Input() product: BehaviorSubject<IProduct>;
	public calculatedCalories: Observable<string>;
	public isShowAmountGrams: boolean = false;
	
	constructor(
		private calculatorService: CalculatorCalorieService,
		@Inject(DEFAULT_CALORIE) protected readonly defaultCalorie: string,
		private destroy: DestroyService
	) {
	}
	
	public calculatedCalorieHandler(): void {
		this.product.pipe(
			take(1),
			tap((p: IProduct) => {
				this.isShowAmountGrams = true;
				if (this.product) {
					this.calculatedCalories = this.calculatorService.getDayGrams(
						+this.calculatorService.calories.getValue(),
						p.productCalorie,
						p.grams
					);
				}
			}),
			takeUntil(this.destroy)
		).subscribe();
		
		this.calculatedCalories.subscribe((calorie: string) => {
			if (calorie === this.defaultCalorie) {
				alert('Пожалуйста рассчитайте дневную норму калорий!');
			}
		})
	}
}

