import { Routes } from '@angular/router';
import { CounterPagesComponent } from './pages/counter/counter-page';
import { HeroPagesComponent } from './pages/hero/hero-page';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page';

export const routes: Routes = [

{
  path: '',
  component: CounterPagesComponent,
},
{
  path: 'hero',
  component: HeroPagesComponent,
},
{
  path: 'dragonball',
  component: DragonballPageComponent,
},
{
  path: 'dragonball-super',
  component: DragonballSuperPageComponent,
},
{
  path: '**',
  redirectTo: '',
},


];
