import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css'],
})
export class NgifComponent implements OnInit {
  //case 1
  isLoggedIn = true;
  nullValue = null;
  currentUser = { username: 'adida' };

  //case 2
  @Input() hero: any;
  constructor() {}

  ngOnInit(): void {}
}
