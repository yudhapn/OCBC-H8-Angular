import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  decryptedPassword: string = '';
  encryptedPassword: string = '';
  constructor() {}
  ngOnInit(): void {}

  changeMessage(text: string) {
    this.decryptedPassword = text;
  }

  encryptPassword(password: string) {
    var noSpaces = this.removeSpaces(password);
    var reversed = this.reverseText(noSpaces);
    this.encryptedPassword = this.updateVowels(reversed);
    
  }

  removeSpaces(text: string) {
    return text.split(' ').join('');
  }

  reverseText(text: string) {
    return text.split('').reverse().join('');
  }

  updateVowels(text: string) {
    return text
      .split('')
      .map((x) => {
        if (x.match(/[A-Za-z]*[aeiou][A-Za-z]*/)) {
          return String.fromCharCode(x.charCodeAt(0) + 1);
        }
        return x;
      })
      .join('');
  }
}
