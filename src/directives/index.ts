import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[contentfulEntry]' })
export class ContentfulEntryDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }
}