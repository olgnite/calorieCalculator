import { InjectionToken } from "@angular/core";

export const BASE_URL: InjectionToken<string> = new InjectionToken<string>('url по умолчанию', {
    factory: () => 'http://localhost:3001'
});
