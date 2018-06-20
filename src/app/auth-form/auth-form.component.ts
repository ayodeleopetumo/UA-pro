import {
  Component,
  Output,
  EventEmitter,
  AfterContentInit,
  ContentChild,
  ContentChildren,
  QueryList
} from '@angular/core';

import { AuthRememberComponent } from './auth-remember.component';

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
        <div *ngIf="showMessage">You will be logged in for 30days</div>
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `
})
export class AuthFormComponent implements AfterContentInit {
  showMessage: boolean;

  @ContentChildren(AuthRememberComponent)
  remember: QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  ngAfterContentInit() {
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
