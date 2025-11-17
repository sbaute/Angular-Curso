import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'dashboard',
    loadComponent: () => import('./gift/pages/dashboard-page/dashboard-page'),
    children: [
      {
        path: 'trending',
        loadComponent: () => import('./gift/pages/trending-page/trending-page'),
      },

      {
        path: 'search',
        loadComponent: () => import('./gift/pages/search-page/search-page'),
      },

      {
        path: 'history/:query',
        loadComponent: () => import('./gift/pages/gif-history/gif-history'),
      },

  {
    path: '**',
    redirectTo: 'trending'
  },

    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }

];
