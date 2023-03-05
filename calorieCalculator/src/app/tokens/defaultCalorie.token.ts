import { InjectionToken } from "@angular/core";

export const DEFAULT_CALORIE: InjectionToken<string> = new InjectionToken<string>('Default calorie value', {
	factory: () => '0.00'
})
