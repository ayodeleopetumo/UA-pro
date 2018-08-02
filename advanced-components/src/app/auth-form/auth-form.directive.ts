import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFormatPassword]'
})
export class AuthFormDirective {
  @HostListener('input')
  onkeyup($event) {
    this.el.nativeElement.value = this.el.nativeElement.value.replace(
      /\w+/g,
      '*'
    );
  }

  constructor(private el: ElementRef) {}
}
