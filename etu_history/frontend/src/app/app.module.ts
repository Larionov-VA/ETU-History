import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ButtonComponent1, ButtonComponent2, ButtonComponent3, ButtonComponent4 } from './button.component';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { HistoryComponent } from './history/history.component';
import { VictorinaComponent } from './victorina/victorina.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, AppComponent, ButtonComponent1, ButtonComponent2, ButtonComponent3, ButtonComponent4, ContentComponent,HistoryComponent,
      VictorinaComponent],
  declarations: [

   ],
  bootstrap: [],
})
export class AppModule {}
