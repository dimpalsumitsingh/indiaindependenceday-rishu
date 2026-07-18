import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent) },
  { path: 'history', loadComponent: () => import('./pages/history/history.component').then(c => c.HistoryComponent) },
  { path: 'timeline', loadComponent: () => import('./pages/timeline-page/timeline-page.component').then(c => c.TimelinePageComponent) },
  { path: 'freedom-fighters', loadComponent: () => import('./pages/freedom-fighters/freedom-fighters.component').then(c => c.FreedomFightersComponent) },
  { path: 'stories', loadComponent: () => import('./pages/stories/stories.component').then(c => c.StoriesComponent) },
  { path: 'gallery', loadComponent: () => import('./pages/gallery-page/gallery-page.component').then(c => c.GalleryPageComponent) },
  { path: 'events', loadComponent: () => import('./pages/events/events.component').then(c => c.EventsComponent) },
  { path: 'quiz', loadComponent: () => import('./pages/quiz/quiz.component').then(c => c.QuizComponent) },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(c => c.AboutComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(c => c.ContactComponent) },
  { path: 'national-symbols', loadComponent: () => import('./pages/national-symbols/national-symbols.component').then(c => c.NationalSymbolsComponent) },
  { path: '**', redirectTo: '' }
];
