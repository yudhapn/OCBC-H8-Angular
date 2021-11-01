import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  parentMessage = 'Hello this is from Parent!';
  title = 'new-project';

  items = ['sepatu', 'sendal', 'tas'];

  addItemInParent(newItem: string) {
    this.items.push(newItem);
    console.log(newItem);
  }

  //directives case 2
  isActive = true
  heroes = [
    {id: 1, name: "Dr. Nice", emotion: "happy"},
    {id: 2, name: "Narco", emotion: "sad"},
    {id: 3, name: "Windstorm", emotion: "confused"},
    {id: 4, name: "Magneta"},
  ]
}
