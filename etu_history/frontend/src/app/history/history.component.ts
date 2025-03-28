import { Component } from '@angular/core';
import { state, animate, style, transition, trigger } from "@angular/animations";


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  animations: [trigger('hover', [
          state('initial', style({
            transform: 'scale(1)'
          })),
          state('final', style({
            backgroundColor: 'Salmon',
            backgroundColorbefore: 'Salmon',
            transform: 'scale(1.1)'
          })),
          transition('initial => final', animate('200ms ease-in')),
          transition('final => initial', animate('200ms ease-out'))

        ])
    ]
})
export class HistoryComponent {

  isOpen = 'initial';
  isOpen_2 = 'initial';
  isOpen_3 = 'initial';
  isOpen_4 = 'initial';
  isOpen_5 = 'initial';
  isOpen_6 = 'initial';
  isOpen_7 = 'initial';
  isOpen_8 = 'initial';
  isOpen_9 = 'initial';
  isOpen_10 = 'initial';
  isOpen_11 = 'initial';
  isOpen_12 = 'initial';
  isOpen_13 = 'initial';
  isOpen_14 = 'initial';
  isOpen_15 = 'initial';
  isOpen_16 = 'initial';
  isOpen_17 = 'initial';
  isOpen_18 = 'initial';
  isOpen_19 = 'initial';
  isOpen_20 = 'initial';
  isOpen_21 = 'initial';
  isOpen_22 = 'initial';
  isOpen_23 = 'initial';
  isOpen_24 = 'initial';
  isOpen_25 = 'initial';
  isOpen_26 = 'initial';
  isOpen_27 = 'initial';
  isOpen_28 = 'initial';
  isOpen_29 = 'initial';
  isOpen_30 = 'initial';
  isOpen_31 = 'initial';
  isOpen_32 = 'initial';
  isOpen_33 = 'initial';
  isOpen_34 = 'initial';
  isOpen_35 = 'initial';
  isOpen_36 = 'initial';
  isOpen_37 = 'initial';
  isOpen_38 = 'initial';
  isOpen_39 = 'initial';
  isOpen_40 = 'initial';

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
    onMouseEnter_5() {
      this.isOpen_5 = 'final';
    }
    onMouseLeave_5() {
      this.isOpen_5 = 'initial';
    }
    onMouseEnter_6() {
      this.isOpen_6 = 'final';
    }
    onMouseLeave_6() {
      this.isOpen_6 = 'initial';
    }
    onMouseEnter_7() {
      this.isOpen_7 = 'final';
    }
    onMouseLeave_7() {
      this.isOpen_7 = 'initial';
    }
    onMouseEnter_8() {
      this.isOpen_8 = 'final';
    }
    onMouseLeave_8() {
      this.isOpen_8 = 'initial';
    }
    onMouseEnter_9() {
      this.isOpen_9 = 'final';
    }
    onMouseLeave_9() {
      this.isOpen_9 = 'initial';
    }
    onMouseEnter_10() {
      this.isOpen_10 = 'final';
    }
    onMouseLeave_10() {
      this.isOpen_10 = 'initial';
    }
    onMouseEnter_11() {
      this.isOpen_11 = 'final';
    }
    onMouseLeave_11() {
      this.isOpen_11 = 'initial';
    }
    onMouseEnter_12() {
      this.isOpen_12 = 'final';
    }
    onMouseLeave_12() {
      this.isOpen_12 = 'initial';
    }
    onMouseEnter_13() {
      this.isOpen_13 = 'final';
    }
    onMouseLeave_13() {
      this.isOpen_13 = 'initial';
    }
    onMouseEnter_14() {
      this.isOpen_14 = 'final';
    }
    onMouseLeave_14() {
      this.isOpen_14 = 'initial';
    }
    onMouseEnter_15() {
      this.isOpen_15 = 'final';
    }
    onMouseLeave_15() {
      this.isOpen_15 = 'initial';
    }
    onMouseEnter_16() {
      this.isOpen_16 = 'final';
    }
    onMouseLeave_16() {
      this.isOpen_16 = 'initial';
    }
    onMouseEnter_17() {
      this.isOpen_17 = 'final';
    }
    onMouseLeave_17() {
      this.isOpen_17 = 'initial';
    }
    onMouseEnter_18() {
      this.isOpen_18 = 'final';
    }
    onMouseLeave_18() {
      this.isOpen_18 = 'initial';
    }
    onMouseEnter_19() {
      this.isOpen_19 = 'final';
    }
    onMouseLeave_19() {
      this.isOpen_19 = 'initial';
    }
    onMouseEnter_20() {
      this.isOpen_20 = 'final';
    }
    onMouseLeave_20() {
      this.isOpen_20 = 'initial';
    }
    onMouseEnter_21() {
      this.isOpen_21 = 'final';
    }
    onMouseLeave_21() {
      this.isOpen_21 = 'initial';
    }
    onMouseEnter_22() {
      this.isOpen_22 = 'final';
    }
    onMouseLeave_22() {
      this.isOpen_22 = 'initial';
    }
    onMouseEnter_23() {
      this.isOpen_23 = 'final';
    }
    onMouseLeave_23() {
      this.isOpen_23 = 'initial';
    }
    onMouseEnter_24() {
      this.isOpen_24 = 'final';
    }
    onMouseLeave_24() {
      this.isOpen_24 = 'initial';
    }
    onMouseEnter_25() {
      this.isOpen_25 = 'final';
    }
    onMouseLeave_25() {
      this.isOpen_25 = 'initial';
    }
    onMouseEnter_26() {
      this.isOpen_26 = 'final';
    }
    onMouseLeave_26() {
      this.isOpen_26 = 'initial';
    }
    onMouseEnter_27() {
      this.isOpen_27 = 'final';
    }
    onMouseLeave_27() {
      this.isOpen_27 = 'initial';
    }
    onMouseEnter_28() {
      this.isOpen_28 = 'final';
    }
    onMouseLeave_28() {
      this.isOpen_28 = 'initial';
    }
    onMouseEnter_29() {
      this.isOpen_29 = 'final';
    }
    onMouseLeave_29() {
      this.isOpen_29 = 'initial';
    }
    onMouseEnter_30() {
      this.isOpen_30 = 'final';
    }
    onMouseLeave_30() {
      this.isOpen_30 = 'initial';
    }
    onMouseEnter_31() {
      this.isOpen_31 = 'final';
    }
    onMouseLeave_31() {
      this.isOpen_31 = 'initial';
    }
    onMouseEnter_32() {
      this.isOpen_32 = 'final';
    }
    onMouseLeave_32() {
      this.isOpen_32 = 'initial';
    }
    onMouseEnter_33() {
      this.isOpen_33 = 'final';
    }
    onMouseLeave_33() {
      this.isOpen_33 = 'initial';
    }
    onMouseEnter_34() {
      this.isOpen_34 = 'final';
    }
    onMouseLeave_34() {
      this.isOpen_34 = 'initial';
    }
    onMouseEnter_35() {
      this.isOpen_35 = 'final';
    }
    onMouseLeave_35() {
      this.isOpen_35 = 'initial';
    }
    onMouseEnter_36() {
      this.isOpen_36 = 'final';
    }
    onMouseLeave_36() {
      this.isOpen_36 = 'initial';
    }
    onMouseEnter_37() {
      this.isOpen_37 = 'final';
    }
    onMouseLeave_37() {
      this.isOpen_37 = 'initial';
    }
    onMouseEnter_38() {
      this.isOpen_38 = 'final';
    }
    onMouseLeave_38() {
      this.isOpen_38 = 'initial';
    }
    onMouseEnter_39() {
      this.isOpen_39 = 'final';
    }
    onMouseLeave_39() {
      this.isOpen_39 = 'initial';
    }
    onMouseEnter_40() {
      this.isOpen_40 = 'final';
    }
    onMouseLeave_40() {
      this.isOpen_40 = 'initial';
    }


}
