import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { PizzadayComponent } from './pizzaday/pizzaday.component';
import { Routing1Component } from './routing1/routing1.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    DropdownComponent,
    PizzadayComponent,
    Routing1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
