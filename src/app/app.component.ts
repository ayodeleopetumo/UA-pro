import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  AfterContentInit
} from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div>
      <div #dynamicComp></div>
    </div>
  `
})
export class AppComponent implements AfterContentInit {
  @ViewChild('dynamicComp', { read: ViewContainerRef })
  dynamicComp: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(
      AuthFormComponent
    );
    const component = this.dynamicComp.createComponent(authFormFactory);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }
}
