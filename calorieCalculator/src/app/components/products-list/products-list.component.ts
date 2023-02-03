import { Observable } from 'rxjs';
import { IProduct } from './../../interfaces/product.interface';
import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
    public products: Observable<IProduct[]>;

    constructor(private requestService: RequestService) { }

    public ngOnInit(): void {
        this.products = this.requestService.getProducts()
    }

    public productNameHandler(e: Event): void {
        const target: HTMLSelectElement = e.target as HTMLSelectElement;
        console.log(target.value);
    }
}
