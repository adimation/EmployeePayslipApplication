import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/core/services/application.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
    public isCollapsed = false;
    public isReverseArrow = false;
    public width = 225;
    public version: string;

    public viewerCount: number = 0;

    constructor(public applicationService: ApplicationService) { 
    }

    ngOnInit(): void {
    }
}
