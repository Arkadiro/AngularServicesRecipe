import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  name:string = '';
  amount:string = '';
  ingredient: Ingredient;
  errorMsg = false;

  @ViewChild('nameinput') nameInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAdd(){
    //console.log(this.name);
    //console.log(this.amount);

    //To pass values using @Viewchild
    const ingredientName = this.nameInputRef.nativeElement.value;
    //console.log(ingredientName);

    if (this.name !== '' && this.amount !== ''){
      console.log(new Ingredient(
        this.name, 
        parseInt(this.amount)
      ))
      this.shoppingListService.addIngredient(
        new Ingredient(
          this.name, 
          parseInt(this.amount)
        )
      );
      this.errorMsg = false;
    } else {
      this.errorMsg = true;
    }

    
  }

}
