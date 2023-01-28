import { Component, VERSION } from '@angular/core';
import { Item } from './Item';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  items: Item[] = [
    { name: 'test 1', items: [] },
    { name: 'test 2', items: [] },
    { name: 'test 3', items: [] },
    { name: 'test 4', items: [] },
    { name: 'test 5', items: [] },
  ];
  items2: Item[] = [{ name: 'test 6', items: [] }];

  getChildPayload1(){
    return index => this.items[index];
  }
}
