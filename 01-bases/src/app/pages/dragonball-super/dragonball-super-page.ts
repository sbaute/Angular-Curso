import { Component, inject, signal } from "@angular/core";
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";
import { DragonballService } from '../../services/dragonball.service';

@Component({
  templateUrl: './dragonball-super-page.html',
  selector: 'dragonball-super',
  imports: [CharacterList, CharacterAdd]
})
export class DragonballSuperPageComponent {

  // constructor(public DragonballService: DragonballService
  // ){} no es recomendado

  public dragonballService = inject(DragonballService); //nueva forma

  // characters = signal<Character[]>([
  //   {id:1, name: 'Goku', power: 9001},
  //   {id:2, name: 'Vegeta', power: 8000},
  // ]);

  // addCharacter(character: Character){
  //   this.characters.update((list) => [...list, character]);
  // }

}
