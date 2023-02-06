import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { IProduct } from './../../interfaces/product.interface';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
    public products: IProduct[] | undefined;
    public productIndex: number;
    public product: IProduct;
    public cacheProductIndex: number = 0;

    constructor(private requestService: RequestService) { }

    public ngOnInit(): void {
        this.cacheProductIndex += 1
        this.requestService.getProducts(this.cacheProductIndex)
            .subscribe((p: IProduct[]) => {
                this.products = p;
            })
    }

    public productNameHandler(e: Event): void {
        const target: HTMLSelectElement = e.target as HTMLSelectElement;
        if (this.products.find((p: IProduct) => p.productId === +target.value)) {
            this.requestService.getProductById(+target.value)
                .subscribe((p: IProduct) => {
                    this.product = p;
                })
        }
    }
}
