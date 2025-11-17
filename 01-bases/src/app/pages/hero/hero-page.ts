import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  templateUrl: './hero-page.html',
  imports: [UpperCasePipe]

})
export class HeroPagesComponent {

name = signal('Ironman');
age= signal(45);

heroDescription = computed(() => {
  const desciption = `${ this.name() } - ${ this.age() }`;
  return desciption;
});

capitalizedName = computed(() => this.name().toLocaleUpperCase());

getHeroDescription() {
return `${ this.name() } - ${ this.age() }`;

}

changeHero(){
  this.name.set('Spiderman');
  this.age.set(22);
}

changeAge(){
  this.age.set(60);
}

resetForm(){
  this.name.set('Ironman');
  this.age.set(45);
}


}
