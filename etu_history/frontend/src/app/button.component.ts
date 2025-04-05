import { Component, ElementRef } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { state, animate, style, transition, trigger } from "@angular/animations";



/**
 * @title Basic buttons
 */


@Component({
  selector: 'button-comp1',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.css'],
  animations: [trigger('hover', [
      state('initial', style({
        transform: 'scale(1)'
      })),
      state('final', style({
        transform: 'scale(1.2)'
      })),
      transition('initial => final', animate('200ms ease-in')),
      transition('final => initial', animate('200ms ease-out'))

    ])
],
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class ButtonComponent1 {

  isOpen = 'initial';
  content: string;
  link: string;

  constructor(private elementRef: ElementRef) {
    this.content = this.elementRef.nativeElement.getAttribute('content');
    this.link = this.elementRef.nativeElement.getAttribute('link');
  }

  onMouseEnter() {
    this.isOpen = 'final';
  }

  onMouseLeave() {
    this.isOpen = 'initial';
  }

  toogle(){
    
  }
}


@Component({
  selector: 'button-comp2',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.css'],
  animations: [trigger('hover', [
      state('initial', style({
        transform: 'scale(1)'
      })),
      state('final', style({
        transform: 'scale(1.2)'
      })),
      transition('initial => final', animate('200ms ease-in')),
      transition('final => initial', animate('200ms ease-out'))

    ])
],
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class ButtonComponent2 {

  isOpen = 'initial';
  content: string;
  link: string;

  constructor(private elementRef: ElementRef) {
    this.content = this.elementRef.nativeElement.getAttribute('content');
    this.link = this.elementRef.nativeElement.getAttribute('link');
  }

  onMouseEnter() {
    this.isOpen = 'final';  }

  onMouseLeave() {
    this.isOpen = 'initial';  }

  toogle(){
    this.isOpen = 'final';  }
}

@Component({
  selector: 'button-comp3',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.css'],
  animations: [trigger('hover', [
      state('initial', style({
        transform: 'scale(1)'
      })),
      state('final', style({
        transform: 'scale(1.2)'
      })),
      transition('initial => final', animate('200ms ease-in')),
      transition('final => initial', animate('200ms ease-out'))

    ])
],
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class ButtonComponent3 {

  isOpen = 'initial';
  content: string;
  link: string;

  constructor(private elementRef: ElementRef) {
    this.content = this.elementRef.nativeElement.getAttribute('content');
    this.link = this.elementRef.nativeElement.getAttribute('link');
  }

  onMouseEnter() {
    this.isOpen = 'final';  }

  onMouseLeave() {
    this.isOpen = 'initial';  }

  toogle(){
    this.isOpen = 'final';  }
}

@Component({
  selector: 'button-comp4',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.css'],
  animations: [trigger('hover', [
      state('initial', style({
        transform: 'scale(1)'
      })),
      state('final', style({
        transform: 'scale(1.2)'
      })),
      transition('initial => final', animate('200ms ease-in')),
      transition('final => initial', animate('200ms ease-out'))

    ])
],
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class ButtonComponent4 {

  isOpen = 'initial';
  content: string;
  link: string;

  constructor(private elementRef: ElementRef) {
    this.content = this.elementRef.nativeElement.getAttribute('content');
    this.link = this.elementRef.nativeElement.getAttribute('link');
  }

  onMouseEnter() {
    this.isOpen = 'final';  }

  onMouseLeave() {
    this.isOpen = 'initial';  }

  toogle(){
    this.isOpen = 'final';  }
}



