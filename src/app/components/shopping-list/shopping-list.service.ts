import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [];

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  constructor() {
    this.ingredients.push(new Ingredient('Carrots', 3));
    this.ingredients.push(new Ingredient('Apple', 7));
  }

  getIngredients():Ingredient[]{
    return [...this.ingredients];
  }

  removeIngredient(name){
    this.ingredients.forEach((ingredient, index)=>{
      if(name === ingredient.name){
        console.log(name)
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.emit([...this.ingredients])
      }
    })
  }
  addIngredient(ingredient:Ingredient){
      this.ingredients.push(ingredient);
      this.ingredientsChanged.emit([...this.ingredients])
  }

  addIngredients(ingredients: Ingredient[]){
    // ingredients.forEach((ingredient) => {
    //   this.addIngredient(ingredient)
    // })
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit([...this.ingredients]);
  }
}
