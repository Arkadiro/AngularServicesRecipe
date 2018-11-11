import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: Recipe[]= [];
  recipeSelected = new EventEmitter<Recipe>();
  ingredients:Ingredient[];

  constructor( private shoppingListService: ShoppingListService) {
    this.ingredients = [ 
      new Ingredient('Meat', 1),
      new Ingredient('Potatos', 3)
    ]
    this.recipes.push(new Recipe('A test Recipe', 'test', 'https://picsum.photos/400/300/',this.ingredients));
    this.recipes.push(new Recipe('Another test Recipe', 'test', 'https://picsum.photos/400/300/',this.ingredients));
  };

  getRecipes(){
    return [...this.recipes];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
