import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

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

  @Output() wasAdded = new EventEmitter<Ingredient>();
  @ViewChild('nameinput') nameInputRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAdd(){
    //console.log(this.name);
    //console.log(this.amount);

    //To pass values using @Viewchild
    const ingredientName = this.nameInputRef.nativeElement.value;
    console.log(ingredientName);

    
    this.ingredient = new Ingredient(this.name, parseInt(this.amount));

    if (this.name !== '' && this.amount !== ''){
      this.ingredient = new Ingredient(this.name, parseInt(this.amount));
      this.wasAdded.emit(this.ingredient)
      this.errorMsg = false;
    } else {
      this.errorMsg = true;
    }

    
  }

}
