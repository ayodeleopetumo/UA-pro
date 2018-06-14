import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  createUser(user) {
    console.log(user);
  }

  loginUser(user) {
    console.log(user);
  }
}
