import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-validation',
    templateUrl: './validation.component.html',
    styleUrls: ['./validation.component.scss']
})
export class ValidationComponent {

    @Input() controls: AbstractControl<number>;

    constructor() { }

}
