import { Component } from '@angular/core';

@Component({
  selector: 'app-user-info-form',
  templateUrl: './user-info-form.component.html',
  styleUrls: ['./user-info-form.component.scss'],
})
export class UserInfoFormComponent {
  name: string = '';
  age: string = '';
  hairColor: string = '';

  displayValues():void {
    alert(`My name is ${this.name} and I am ${this.age} years old. My hair color is ${this.hairColor}`);
  }
}
