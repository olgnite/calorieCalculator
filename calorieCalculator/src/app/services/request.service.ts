import { HttpClient } from "@angular/common/http";
import { inject, Inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { IProduct, IProductsRequest } from "../interfaces/product.interface";
import { BASE_URL } from "../tokens/baseUrl.token";

@Injectable()
export class RequestService {
    public baseUrl: string = inject(BASE_URL);
    public http: HttpClient = inject(HttpClient);

    public getProducts(): Observable<IProduct[]> {
        return this.http.get<IProductsRequest[]>(`${this.baseUrl}/products`)
            .pipe(
                map((p: IProductsRequest[]) => {
                    const products: IProduct[] = []
                    p.forEach((v: IProductsRequest) => products.push({
                        productName: v.product_name,
                        productCalorie: v.product_calorie,
                        grams: v.grams,
                        productId: v.id
                    }));
                    return products;
                })
            )
    }
}
