import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[HightLightRow]',
	host: {
		'(click)': 'onClick($event)'
	}
})

export class HighlightDirective{

	@Input('HightLightRow') highLightColor : string;
	@Input('defaultColor') defaultColor : string = '#F7F9D2';

	constructor(private el : ElementRef, private renderer : Renderer){

	}

	@HostListener('mouseenter') onMouseEnter(){
		this.highlight(this.highLightColor || this.defaultColor);
	}

	@HostListener('mouseleave') onMouseLeave(){
		this.highlight(null);
	}

	private highlight(color: string) {
	this.el.nativeElement.style.backgroundColor = color;
	}

}