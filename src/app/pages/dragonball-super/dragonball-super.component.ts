import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-super-dragonball',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super.component.html',
})
export class DragonballSuperComponent {
  name= signal<string>('');
  power = signal<number>(0);
  characters= signal<Character[]>([
    {id: 1, name: 'Goku', power: 10000},
    {id: 2, name: 'Master Roshi', power: 1000},
  ])

  addCharacter(character: Character){
    this.characters.update((list) => [...list, character]);
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}
