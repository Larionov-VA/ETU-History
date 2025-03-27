import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ButtonComponent1, ButtonComponent2, ButtonComponent3, ButtonComponent4 } from './button.component';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, AppComponent, ButtonComponent1, ButtonComponent2, ButtonComponent3, ButtonComponent4, ContentComponent],
  declarations: [

   ],
  bootstrap: [],
})
export class AppModule {}
