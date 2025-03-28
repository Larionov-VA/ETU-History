import { Component, OnInit,  ElementRef } from '@angular/core';
import { state, animate, style, transition, trigger } from "@angular/animations";


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  animations: [trigger('hover', [
        state('initial', style({
          transform: 'scale(1)'
        })),
        state('final', style({
          backgroundColor: 'LightSteelBlue',
          transform: 'scale(1.1)'
        })),
        transition('initial => final', animate('200ms ease-in')),
        transition('final => initial', animate('200ms ease-out'))

      ])
  ]
})
export class ContentComponent {

  link: string;

    constructor(private elementRef: ElementRef) {
      this.link = this.elementRef.nativeElement.getAttribute('link');
    }


  isOpen = 'initial';
  isOpen_2 = 'initial';
  isOpen_3 = 'initial';
  isOpen_4 = 'initial';

    onMouseEnter() {
      this.isOpen = 'final';
    }

    onMouseLeave() {
      this.isOpen = 'initial';
    }

    onMouseEnter_2() {
      this.isOpen_2 = 'final';
    }

    onMouseLeave_2() {
      this.isOpen_2 = 'initial';
    }

    onMouseEnter_3() {
      this.isOpen_3 = 'final';
    }

    onMouseLeave_3() {
      this.isOpen_3 = 'initial';
    }

    onMouseEnter_4() {
      this.isOpen_4 = 'final';
    }

    onMouseLeave_4() {
      this.isOpen_4 = 'initial';
    }



}
