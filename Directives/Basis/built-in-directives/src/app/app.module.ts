import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
    declarations: [ AppComponent, GridComponent ],
    imports: [ BrowserModule, FormsModule ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
