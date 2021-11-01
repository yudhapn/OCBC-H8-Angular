import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  // case 1
  isActive = true
  heroes = [
    {id: 1, name: "Dr. Nice", emotion: "happy"},
    {id: 2, name: "Narco", emotion: "sad"},
    {id: 3, name: "Windstorm", emotion: "confused"},
    {id: 4, name: "Magneta"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
