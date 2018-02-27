import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;

  @Output() newIngredientAdded=new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAdd(){

    const name=this.nameInputRef.nativeElement.value;
    console.log(name);
    const amount=this.amountInputRef.nativeElement.value;
    console.log(amount);
    const newIngredient= new Ingredient(name, amount);
    this.newIngredientAdded.emit(newIngredient);

  }

}
