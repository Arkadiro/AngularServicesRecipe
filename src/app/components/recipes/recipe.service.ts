import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: Recipe[]= [];

  constructor() {
    this.recipes.push(new Recipe('A test Recipe', 'test', 'https://picsum.photos/400/300/'));
    this.recipes.push(new Recipe('Another test Recipe', 'test', 'https://picsum.photos/400/300/'));
  };

  getRecipes(){
    return [...this.recipes];
  }
}
