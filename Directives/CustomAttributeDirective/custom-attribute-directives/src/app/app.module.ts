import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomNgClassDirective } from './custom-ng-class.directive';

@NgModule({
    declarations: [ AppComponent, CustomNgClassDirective ],
    imports: [ BrowserModule ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
