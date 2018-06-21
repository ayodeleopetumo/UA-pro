import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'auth-message',
  template: `
    <div>
      You will be logged in for {{ numberOfDays }} days
    </div>
  `
})
export class AuthMessageComponent implements OnInit {
  numberOfDays = 7;

  constructor() {}

  ngOnInit() {}
}
