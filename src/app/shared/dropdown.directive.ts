import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  // @HostBinding('class.show') isOpen = false;
  // constructor() {}
  // @HostListener('click') toggleOpen() {
  //   console.log('clicked');
  //   this.isOpen = !this.isOpen;
  // }
  private isShown: boolean = false;
  @HostListener('click') toggleOpen() {

    if (this.isShown) {
      this.renderer.removeClass(this.elRef.nativeElement, 'show');
    } else {
      this.renderer.addClass(this.elRef.nativeElement, 'show');
    }

    this.isShown = !this.isShown;
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
}
