import {
  Component,
  ViewChild,
  ComponentRef,
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
      <ng-template #dynamicComp></ng-template>
    </div>
  `
})
export class AppComponent implements AfterContentInit {
  component: ComponentRef<AuthFormComponent>;

  @ViewChild('dynamicComp', { read: ViewContainerRef })
  dynamicComp: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(
      AuthFormComponent
    );
    this.component = this.dynamicComp.createComponent(authFormFactory);
    this.component.instance.title = 'Create account';
    this.component.instance.submitted.subscribe(this.loginUser);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }
}
