import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Carrots', 3)
  ];
  

  constructor() { }

  ngOnInit() {
    this.ingredients.push(new Ingredient('Carrots', 3));
    console.log(this.ingredients)
  }
  onRemove(name){
    console.log(this.ingredients)
    this.ingredients.forEach((ingredient, index)=>{
      if(name === ingredient.name){
        this.ingredients.splice(index, 1);
      }
    }
    )
  }
  ingredientAdded(ingredient:Ingredient){
    console.log(ingredient);
      this.ingredients.push(ingredient);
  }

}
