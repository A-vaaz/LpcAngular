import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appRepeatFor]'
})
export class RepeatForDirective {
    @Input()
    set appRepeatFor(countForRepeat: number) {
        for (let i = 0; i < countForRepeat; i++) {
            this.vcRef.createEmbeddedView(this.templateRef);
        }
    }
    constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {}
}
