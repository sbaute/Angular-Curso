import { Component, computed, inject, signal } from '@angular/core';
import { GifList } from "../../components/gif-list/gif-list";
import { GifService } from '../../services/gif.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GifList],
  templateUrl: './search-page.html',
})
export default class SearchPage {

  GifService = inject( GifService)
  gifs = signal<Gif[]>([]);

 onSearch( query: string) {
  this.GifService.searchGifs(query)
  .subscribe( (resp) => {
     this.gifs.set(resp);
  });

 }



}
