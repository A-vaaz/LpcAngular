import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RepeatForDirective } from './repeat-for.directive';

@NgModule({
    declarations: [ AppComponent, RepeatForDirective ],
    imports: [ BrowserModule ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
