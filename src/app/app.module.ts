import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxSmoothDnDModule } from 'ngx-smooth-dnd';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
@NgModule({
  imports: [BrowserModule, FormsModule, NgxSmoothDnDModule],
  declarations: [AppComponent, ItemComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
