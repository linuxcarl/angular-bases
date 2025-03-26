import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character{
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-super-dragonball',
  imports: [],
  templateUrl: './dragonball-super.component.html',
})
export class DragonballSuperComponent {
 name= signal<string>('');
 power = signal<number>(0);
  characters= signal<Character[]>([
    {id: 1, name: 'Goku', power: 10000},
    {id: 2, name: 'Master Roshi', power: 1000},
  ])

  addCharacter(){
    if(!this.name() || !this.power()) return;

    const id = this.characters.length + 1;
    const newCharacter = {id, name: this.name(), power: this.power()};
    this.characters.update((list) => [...list,newCharacter] );
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}
