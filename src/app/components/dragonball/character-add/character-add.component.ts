import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  name= signal<string>('');
  power = signal<number>(0);

  newCharacter = output<Character>();
  addCharacter(){
    if(!this.name() || !this.power()) return;

    const newCharacter = {id: new Date().getTime(), name: this.name(), power: this.power()};
    this.newCharacter.emit(newCharacter)
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}
