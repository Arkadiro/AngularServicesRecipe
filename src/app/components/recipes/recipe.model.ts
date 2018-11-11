import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ingredient } from 'src/app/shared/ingredient.model';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Recipe { 
  public name: string;
  public descrition: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, imagePath: string, ingredients:Ingredient[]) {
    this.name = name;
    this.descrition = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }


}
