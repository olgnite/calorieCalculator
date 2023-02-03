import { routes } from './../../constData';
import { Component, OnInit } from '@angular/core';
import { IRoute } from 'src/app/interfaces/routes.interface';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    public isToggle: boolean = false;
    public sidebarRoutes: IRoute[] = routes;

    constructor() { }

    public ngOnInit(): void {
    }

    public showSidebarHandler(): void {
        this.isToggle = !this.isToggle;
    }
}
