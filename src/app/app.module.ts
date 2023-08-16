import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ButtonComponent, CardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
