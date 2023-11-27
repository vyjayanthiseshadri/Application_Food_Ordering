// light-on-hover.directive.ts

import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLightOnHover]'
})
export class LightOnHoverDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Listen for the mouseover event on the host element
  @HostListener('mouseover') onMouseOver() {
    this.highlight('green');
  }

  // Listen for the mouseleave event on the host element
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  // Private method to apply the highlight
  private highlight(color: string | null) {
    // This is a private method that takes a color as an argument 
    // and applies the color to the text of the host element using Renderer2
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
