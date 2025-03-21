import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  templateUrl: './hero-page.component.html',
  styles: `
    dd {
      font-size: 18px;
      font-family: Arial, sans-serif;
      font-weight: bold;
    }`,
    imports:[UpperCasePipe]
  })
  export class HeroPageComponent {


  name = signal<string>('Superman');
  age = signal<number>(30);

  getHeroDescription = computed(() => {
    const description = `${this.name()} is ${this.age()} years old` ;
    return description;
  })
  changeAge(){
    this.age.set(40);
  }
  changeHero(){
    this.name.set('Batman');
  }
  resetForm(){
    this.name.set('Superman');
    this.age.set(30);
  }

}