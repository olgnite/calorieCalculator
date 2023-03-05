import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, map, Observable, of, tap, throwError } from "rxjs";
import { IProduct, IProductsRequest } from "../interfaces/product.interface";
import { BASE_URL } from "../tokens/baseUrl.token";
import { CacheService } from "./cache.service";

@Injectable()
export class RequestService {
    public baseUrl: string = inject(BASE_URL);
    public http: HttpClient = inject(HttpClient);

    constructor(private cacheService: CacheService) {
    }

    public getProducts(index: number): Observable<IProduct[]> {
        const key: string = `cacheProduct-${index}`;

        if (!this.cacheService.getCacheData(key)) {
            return this.http.get<IProductsRequest[]>(`${this.baseUrl}/products`)
                .pipe(
                    tap((p: IProductsRequest[]) => {
                        this.cacheService.setCacheData<IProductsRequest[]>(key, p)
                    }),
                    map((p: IProductsRequest[]) => {
                        const products: IProduct[] = []
                        p.forEach((v: IProductsRequest) => products.push({
                            productName: v.product_name,
                            productCalorie: v.product_calorie,
                            grams: v.grams,
                            productId: v.id
                        }));
                        return products;
                    }),
                    catchError((error) => {
                        console.log('Request error...', error);
                        return throwError(error);
                    })
                )
        }
        return of(this.cacheService.getCacheData<IProduct[]>(key));
    }

    public getProductById(id: number): Observable<IProduct> {
        return this.http.get<IProductsRequest>(`${this.baseUrl}/products/${id}`)
            .pipe(
                map((p: IProductsRequest) => {
                    return {
                        productName: p.product_name,
                        productCalorie: p.product_calorie,
                        grams: p.grams
                    }
                }),
                catchError((error) => {
                    console.log('Request error...', error);
                    return throwError(error);
                })
            )
    }
}
