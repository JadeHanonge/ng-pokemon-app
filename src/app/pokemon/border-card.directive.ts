import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  private initialeColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight : number = 190;

  constructor(private el: ElementRef) { 
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialeColor);
  }

@Input('pkmBorderCard') borderColor: string;

@HostListener('mouseenter') onMouseEnter() {
  this.setBorder(this.borderColor || this.defaultColor);
}

@HostListener('mouseleave') onMouseLeave() {
  this.setBorder(this.initialeColor);
}

  private setHeight(height: number){
    this.el.nativeElement.style.height = height + 'px';
  }

  private setBorder(color: string){
    let border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border;
  }

}
