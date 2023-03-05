import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-calculator-daily-calorie',
    templateUrl: './calculator-daily-calorie.component.html',
    styleUrls: ['./calculator-daily-calorie.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorDailyCalorieComponent {

    constructor() { }

}

