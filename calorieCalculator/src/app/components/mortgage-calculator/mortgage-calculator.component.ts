import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-mortgage-calculator',
    templateUrl: './mortgage-calculator.component.html',
    styleUrls: ['./mortgage-calculator.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MortgageCalculatorComponent implements OnInit {

    constructor() {
    }

    public ngOnInit(): void {

    }
}
