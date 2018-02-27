import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output() recipeWasSelected= new EventEmitter<Recipe>();
    recipes: Recipe[]= [
		new Recipe('My First Recipe', 'This cake is a two layer chocolate cake with a glorious raspberry filling. The cake is then covered in chocolate buttercream and topped with chocolate ganache.','http://ghk.h-cdn.co/assets/15/12/1426719496-chocolate-cake.jpg'),
		new Recipe('My second Recipe', 'This cake is a two layer chocolate cake with a glorious raspberry filling. The cake is then covered in chocolate buttercream and topped with chocolate ganache.','http://ghk.h-cdn.co/assets/15/12/1426719496-chocolate-cake.jpg')
	];



  constructor() { }

  ngOnInit() {
  }

  OnSelectedRecipe(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);

  }

}
