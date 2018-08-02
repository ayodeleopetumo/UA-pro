import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'auth-message',
  template: `
    <div>
      You will be logged in for {{ days }} day(s)
    </div>
  `
})
export class AuthMessageComponent implements OnInit {
  days = 7;

  constructor() {}

  ngOnInit() {}
}
