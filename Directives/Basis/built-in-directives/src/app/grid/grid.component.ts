import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../Models/Person';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: [ './grid.component.css' ]
})
export class GridComponent implements OnInit {
    @Input() data: Person[];
    @Input() themeClass: string;
    constructor() {}

    ngOnInit(): void {}
}
