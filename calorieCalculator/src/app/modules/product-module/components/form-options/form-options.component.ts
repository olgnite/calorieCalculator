import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { calculatorTypes, regularNum } from '../../../../constData';
import { ICalculatorType } from '../../../../shared/interfaces/calculatorType.interface';
import { CalculatorCalorieService } from '../../services/calculator-calorie.service';
import { Observable, Subscriber } from 'rxjs';

@Component({
	selector: 'app-form-options',
	templateUrl: './form-options.component.html',
	styleUrls: ['./form-options.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormOptionsComponent implements OnInit {
	public form: FormGroup | undefined;
	public isShowDailyRate: boolean = false;
	public types: Observable<ICalculatorType[]>;
	
	constructor(
		private formBuilder: FormBuilder,
		public calculatorCalorie: CalculatorCalorieService
	) {
	}
	
	public ngOnInit(): void {
		this.types = new Observable<ICalculatorType[]>((observer: Subscriber<ICalculatorType[]>) => {
			observer.next(calculatorTypes);
		});
		this.form = this.formBuilder.group({
			weight:
				[
					null,
					[
						Validators.required,
						Validators.pattern(regularNum)
					]
				],
			height:
				[
					null,
					[
						Validators.required,
						Validators.pattern(regularNum)
					]
				],
			age:
				[
					null,
					[
						Validators.required,
						Validators.pattern(regularNum)
					]
				],
			sex:
				[
					'',
					Validators.required
				],
			calculatorType:
				[
					'',
					Validators.required
				]
		});
	}
	
	public onSubmit(): void {
		this.calculatorCalorie.dailyRateCalorieCalculate(
			this.form.value.weight,
			this.form.value.height,
			this.form.value.age,
			this.form.value.sex,
			this.form.value.calculatorType);
		this.isShowDailyRate = true;
		
		if (this.form.invalid) {
			return;
		}
	}
}

