import { AppModule } from './app/app.module';
import { ButtonComponent1, ButtonComponent2, ButtonComponent3, ButtonComponent4 } from './app/button.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ContentComponent } from './app/content/content.component';
import { VictorinaComponent } from './app/victorina/victorina.component';
import { HistoryComponent } from './app/history/history.component';
import { ContactComponent } from './app/contact/contact.component';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));


bootstrapApplication(ButtonComponent1, appConfig).catch((err) => console.error(err));
bootstrapApplication(ButtonComponent2, appConfig).catch((err) => console.error(err));
bootstrapApplication(ButtonComponent3, appConfig).catch((err) => console.error(err));
bootstrapApplication(ButtonComponent4, appConfig).catch((err) => console.error(err));
bootstrapApplication(ContentComponent, appConfig).catch((err) => console.error(err));
bootstrapApplication(HistoryComponent, appConfig).catch((err) => console.error(err));
bootstrapApplication(VictorinaComponent, appConfig).catch((err) => console.error(err));
bootstrapApplication(ContactComponent, appConfig).catch((err) => console.error(err));


bootstrapApplication(AppModule, appConfig).catch((err) => console.error(err));

bootstrapApplication(ButtonComponent1, {providers: [provideAnimationsAsync(),]});
bootstrapApplication(ButtonComponent2, {providers: [provideAnimationsAsync(),]});
bootstrapApplication(ButtonComponent3, {providers: [provideAnimationsAsync(),]});
bootstrapApplication(ButtonComponent4, {providers: [provideAnimationsAsync(),]});
bootstrapApplication(ContentComponent, {providers: [provideAnimationsAsync(),]});
bootstrapApplication(HistoryComponent, {providers: [provideAnimationsAsync(),]});

