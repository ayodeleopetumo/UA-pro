import {
  Component,
  Output,
  EventEmitter,
  AfterContentInit,
  ContentChild,
  ContentChildren,
  QueryList,
  ViewChild,
  AfterViewInit,
  ViewChildren,
  ChangeDetectorRef
} from '@angular/core';

import { AuthRememberComponent } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';

import { User } from './auth-form.interface';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'auth-form',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
        <!-- The select attribute works just like the querySelector function;
        by passing in tag, class or id selectors -->
        <ng-content select="auth-remember"></ng-content>
        <auth-message [style.display]="(showMessage ? 'inherit' : 'none')"></auth-message>
        <!--
          // For testing ViewChildren decoraror
          <auth-message [style.display]="(showMessage ? 'inherit' : 'none')"></auth-message>
          <auth-message [style.display]="(showMessage ? 'inherit' : 'none')"></auth-message>
        -->
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  showMessage: boolean;

  @ViewChild(AuthMessageComponent) message: AuthMessageComponent;
  @ViewChildren(AuthMessageComponent) messages: QueryList<AuthMessageComponent>;

  @ContentChildren(AuthRememberComponent)
  remember: QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(private db: ChangeDetectorRef) {}

  ngAfterViewInit() {
    /*
       Reference for the ViewChildren decorator is only available in this lifecycle hook,
       but must also implement a ChangeDetector
    */
    this.messages.forEach(message => (message.numberOfDays = 30));
    this.db.detectChanges();
  }

  ngAfterContentInit() {
    // this.message.numberOfDays = 30;

    if (this.remember) {
      this.remember.forEach(item =>
        item.checked.subscribe(checked => (this.showMessage = checked))
      );
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
