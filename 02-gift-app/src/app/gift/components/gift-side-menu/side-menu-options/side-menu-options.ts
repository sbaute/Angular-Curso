import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { GifService } from '../../../services/gif.service';

interface MenuOption {
  icon: string;
  label: string;
  route: string;
  subLabel: string;
}

@Component({
  selector: 'gift-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.html',
})
export class SideMenuOptions {

  GifService = inject(GifService);

menuOptions: MenuOption[] = [
  {
    icon: 'fa-solid fa-chart-line',
    label: 'Trending',
    subLabel: 'Gift Populares',
    route: '/dashboard/trending',

  },
    {
    icon: 'fa-solid fa-magnifying-glass',
    label: 'Buscador',
    subLabel: 'Buscar gift',
    route: '/dashboard/search',

  }


]








}
