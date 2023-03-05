import { ICalculatorType } from "./interfaces/calculatorType.interface";
import { IRoute } from "./interfaces/routes.interface";

export const routes: IRoute[] = [
    {
        path: '/daily-rate',
        label: 'Калькулятор суточной нормы калорий'
    },
	{
		path: '/mortgage',
		label: 'Ипотечный калькулятор'
	}
]

export const regularNum: RegExp = /^[0-9]*[.,]?[0-9]+$/

export const calculatorTypes: ICalculatorType[] = [
    {
        workType: 'Сидячий образ жизни без нагрузок',
        bmrValue: 1.2,
    },
    {
        workType: 'Тренировки  1-3 раза в неделю',
        bmrValue: 1.375,
    },
    {
        workType: 'Занятия 3-5 дней в неделю',
        bmrValue: 1.55,
    },
    {
        workType: 'Интенсивные тренировки 6-7 раз в неделю',
        bmrValue: 1.725,
    }
]

