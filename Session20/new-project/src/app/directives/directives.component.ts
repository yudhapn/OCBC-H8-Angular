import { Component, OnInit } from '@angular/core';

const correctUsername: string = 'yudha';
const correctPassword: string = 'yudha123';
const succeededLoginMessage: string = 'You have logged in';
const failedLoginMessage: string = 'Username or password is not correct';
@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  username = '';
  password = '';
  isLoggedIn = false;
  message = '';
  nullValue = null;
  currentUser = { username: '' };

  constructor() {}

  ngOnInit(): void {}

  login() {
    this.isLoggedIn =
      correctUsername == this.username && correctPassword == this.password;
    this.currentUser.username = this.username;
    this.message = this.isLoggedIn ? succeededLoginMessage : failedLoginMessage;
  }
}
