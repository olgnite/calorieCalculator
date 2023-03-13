import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { Gender } from "../../../shared/enums/gender.enum";
import { calculatorTypes } from "../../../constData";
import { ICalculatorType } from "../../../shared/interfaces/calculatorType.interface";

@Injectable()
export class CalculatorCalorieService {
    public calories: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

    public dailyRateCalorieCalculate(
        weight: number,
        height: number,
        age: number,
        sex: string,
        calculatorType: string
    ): void {
        calculatorTypes.forEach((type: ICalculatorType) => {
            type.workType === calculatorType && sex === Gender.man
                ? this.calories.next(((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * type.bmrValue).toFixed(2))
                : type.workType === calculatorType && sex === Gender.woman
                    ? this.calories.next(((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * type.bmrValue).toFixed(2))
                    : 0
        });
    }

    public getDayGrams(dailyCalories: number, productCalories: number, grams: number): Observable<string> {
        const daysGrams: string = (dailyCalories / productCalories * grams).toFixed(2);

        return of(daysGrams);
    }
}


