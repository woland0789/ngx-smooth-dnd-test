import { Component, Input } from '@angular/core';
import { Item } from '../Item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() items: Item[] = [];

  onDrop(event) {
    if (event.addedIndex === null && event.removedIndex === null) return;
    console.log(event);
    if (event.removedIndex) {
      this.items.splice(event.removedIndex, 1);
    }
    this.items.splice(event.eddedIndex, 0, event.payload);
  }

  getChildPayload() {
    return (index) => this.items[index];
  }
}
