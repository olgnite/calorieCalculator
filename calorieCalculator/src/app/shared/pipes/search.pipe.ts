import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: 'search'
})
export class SearchPipe implements PipeTransform {
	public transform(productName: string): void {

	}

}
