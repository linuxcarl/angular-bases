import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character{
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.css'
})
export class DragonballComponent {

  characters= signal<Character[]>([
    {id: 1, name: 'Goku', power: 10000},
    {id: 2, name: 'Vegeta', power: 9000},
    {id: 3, name: 'Gohan', power: 8000},
    {id: 4, name: 'Piccolo', power: 7000},
    {id: 5, name: 'Krillin', power: 6000},
    {id: 6, name: 'Yamcha', power: 5000},
    {id: 7, name: 'Tien', power: 4000},
    {id: 8, name: 'Chiaotzu', power: 3000},
    {id: 9, name: 'Bulma', power: 2000},
    {id: 10, name: 'Master Roshi', power: 1000},
  ])
}
