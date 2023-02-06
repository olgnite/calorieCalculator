import { Injectable } from "@angular/core";

@Injectable()
export class CacheService {
    private cacheList: Map<string, any> = new Map<string, any>()

    public getCacheData<T>(key: string): T {
        return this.cacheList.get(key);
    }

    public setCacheData<T>(key: string, data: T): void {
        this.cacheList.set(key, data);
    }
}
