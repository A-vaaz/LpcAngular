import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appCustomNgClass]'
})
export class CustomNgClassDirective implements OnInit {
    //می توان تعدادی پراپرتی به عنوان ورودی در نظر گرفت
    // @Input() classObject: any;
    // میتوان ورودی را همنام با سلکتور در نظر گرفت
    @Input() appCustomNgClass: any;

    //بایند شدن به اتریبیوت های المنت
    @HostBinding('style.color') color; // == this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
    ngOnInit(): void {
        // if (this.classObject) {
        //     for (const property in this.classObject) {
        //         if (this.classObject[property]) {
        //             this.renderer.addClass(this.elementRef.nativeElement, property);
        //         }
        //     }
        // }
        if (this.appCustomNgClass) {
            for (const property in this.appCustomNgClass) {
                if (this.appCustomNgClass[property]) {
                    this.renderer.addClass(this.elementRef.nativeElement, property);
                }
            }

            this.color = 'white'; // == this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
        }
    }

    @HostListener('mouseenter')
    entered() {
        for (const property in this.appCustomNgClass) {
            if (this.appCustomNgClass[property]) {
                this.renderer.removeClass(this.elementRef.nativeElement, property);
            }
        }

        this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'yellow');
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
    }
}
