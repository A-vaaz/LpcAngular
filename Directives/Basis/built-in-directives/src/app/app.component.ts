import { Person } from './Models/Person';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
})
export class AppComponent {
    title = 'built-in-directives';
    lightTheme = false;

    data = [
        new Person('مهدی', 'حسینی'),
        new Person('جواد', 'روان جمجاه'),
        new Person('ایواز', 'احمدیان'),
        new Person('حسن', 'فریدون')
    ];
}
