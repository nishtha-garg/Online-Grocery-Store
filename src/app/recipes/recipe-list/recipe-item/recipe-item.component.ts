import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() recipeData=new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log("more details button clicked");
    this.recipeData.emit();
  }

}
