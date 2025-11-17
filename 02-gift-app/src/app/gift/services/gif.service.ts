import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, Observable, tap } from 'rxjs';


// {
//   'goku': [gif1,gif2,gif3],
// }
// Record<string, Gif[]>

const GIF_KEY = 'gifs'
const loadFromLocalStorage = () => {
  const gifsFromLocalStorage = localStorage.getItem(GIF_KEY) ?? '{}'; //record<string, gif[]>
  const gifs = JSON.parse(gifsFromLocalStorage);

  console.log(gifs)
  return gifs
};

@Injectable({providedIn: 'root'}) //mas o menos como un singleton
export class GifService {

  private http = inject(HttpClient);

  trendingGif = signal<Gif[]>([]);
  trendingGifLoading = signal(true);

  searchHistory= signal<Record<string, Gif[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed(()=> Object.keys(this.searchHistory()));


  constructor(){
    this.loadTrendingGifs();
  }


 saveGifToLocalStorage = effect((()=> {
   const historyString = JSON.stringify(this.searchHistory());
   localStorage.setItem(GIF_KEY, historyString);
 }))


 loadTrendingGifs(){
  this.http.get<GiphyResponse>(`${ environment.giphyUrl}/gifs/trending`,{
    params: {
      api_key: environment.giphyApiKey,
      limit: 20
    }
  }).subscribe( (resp) => {
    const gifs = GifMapper.mapGiphyItemToGifArray(resp.data);
    this.trendingGif.set(gifs);
    this.trendingGifLoading.set(false);
    console.log({ gifs })
  })
 }

 searchGifs( query: string) : Observable<Gif[]>{
  return this.http.get<GiphyResponse>(`${ environment.giphyUrl}/gifs/search`,{
    params: {
      api_key: environment.giphyApiKey,
      limit: 20,
      q: query,
    }
  }).pipe(
    map( ({ data }) => data  ),
    map( (items) => GifMapper.mapGiphyItemToGifArray(items)),

    //Historial
    tap(items => {
      this.searchHistory.update( history =>({
        ...history,
        [query.toLocaleLowerCase()]: items
      }))
    })
  );

  // .subscribe( (resp) => {
  //   const gifs = GifMapper.mapGiphyItemToGifArray(resp.data);
  //   console.log({ Search : gifs })
  // })
 }


 getHistoryGifs(query : string) : Gif[]{
  return this.searchHistory()[query] ?? [];
 }



}
