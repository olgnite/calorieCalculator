import { routes } from './../../constData';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IRoute } from 'src/app/shared/interfaces/routes.interface';
import { Observable, Subscriber } from 'rxjs';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
    public isToggle: boolean = false;
    public sidebarRoutes: Observable<IRoute[]>;

    constructor() {
    }

    public ngOnInit(): void {
        this.sidebarRoutes = new Observable<IRoute[]>((observer: Subscriber<IRoute[]>) => {
            observer.next(routes);
        });
    }

    public showSidebarHandler(): void {
        this.isToggle = !this.isToggle;
    }
}
