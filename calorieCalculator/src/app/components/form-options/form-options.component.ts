import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regularNum } from 'src/app/constData';
import { ICalculatorType } from 'src/app/interfaces/calculatorType.interface';
import { CalculatorCalorieService } from 'src/app/services/calculatorCalorie.service';
import { calculatorTypes } from './../../constData';

@Component({
    selector: 'app-form-options',
    templateUrl: './form-options.component.html',
    styleUrls: ['./form-options.component.scss']
})
export class FormOptionsComponent implements OnInit {
    public form: FormGroup | undefined;
    public isShowDailyRate: boolean = false;
    public types: ICalculatorType[] = calculatorTypes;
    public calories: number | undefined;

    constructor(
        private formBuilder: FormBuilder,
        public calculatorCalorie: CalculatorCalorieService
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
        this.calculatorCalorie.dailyRateCalorieCalculate(
            this.form.value.weight,
            this.form.value.height,
            this.form.value.age,
            this.form.value.sex,
            this.form.value.calculatorType)

        this.calculatorCalorie.calories
            .subscribe((calorie: string) => {
                this.calories = Number(calorie)
            })
    }
}

