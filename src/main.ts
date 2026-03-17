import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/pages/home.component';
import { FutureComponent } from './app/pages/future.component';
import { FaqsComponent } from './app/pages/faqs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'future', component: FutureComponent },
  { path: 'faqs', component: FaqsComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));