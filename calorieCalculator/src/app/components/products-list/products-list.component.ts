import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { IProduct } from '../../interfaces/product.interface';
import { BehaviorSubject, Observable, of, switchMap, takeUntil } from "rxjs";
import { DestroyService } from "../../services/destroy.service";

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		DestroyService
	]
})
export class ProductsListComponent implements OnInit {
	public product$: BehaviorSubject<IProduct | null> = new BehaviorSubject<IProduct | null>(null);
	public products: Observable<IProduct[]>;

	constructor(
		private requestService: RequestService,
		private destroy: DestroyService
	) {
	}

	public ngOnInit(): void {
		const cacheProductIndex: number = 1
		this.products = this.requestService.getProducts(cacheProductIndex)
	}

	public productNameHandler(e: Event): void {
		const target: HTMLSelectElement = e.target as HTMLSelectElement;
		this.products.pipe(
			switchMap((product: IProduct[]) => {
				if (product.find(p => p.productId === +target.value)) {
					return this.requestService.getProductById(+target.value)
				}
				return of([]);
			}),
			takeUntil(this.destroy)
		).subscribe((productById: IProduct) => {
			this.product$.next(productById);
		})
	}
}

