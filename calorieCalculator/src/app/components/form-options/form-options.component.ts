import { calculatorTypes } from './../../constData';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regularNum } from 'src/app/constData';
import { DailyCalculatorService } from 'src/app/services/dailyCalculator.service';
import { ICalculatorType } from 'src/app/interfaces/calculatorType.interface';

@Component({
    selector: 'app-form-options',
    templateUrl: './form-options.component.html',
    styleUrls: ['./form-options.component.scss']
})
export class FormOptionsComponent implements OnInit {
    public form: FormGroup | undefined;
    public isShowDailyRate: boolean = false;
    public types: ICalculatorType[] = calculatorTypes;

    constructor(
        private formBuilder: FormBuilder,
        public dailyCalculatorService: DailyCalculatorService
    ) { }

    public ngOnInit(): void {
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
        })
    }

    public onSubmit(): void {
        if (this.form.invalid) {
            return;
        }
        this.isShowDailyRate = true;
        this.dailyCalculatorService.dailyRateCalorieCulculate(
            this.form.value.weight,
            this.form.value.height,
            this.form.value.age,
            this.form.value.sex,
            this.form.value.calculatorType);
    }
}

// 1600 -> яблоко -> 130 = 1600 / 130 * 100 (на 100 грамм продукта)
