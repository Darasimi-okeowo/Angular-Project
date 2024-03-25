import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.recipetineats.com/wp-content/uploads/2018/09/Honey-Garlic-Chicken-Breast_5.jpg',
      [new Ingredient('Eba', 1), new Ingredient('Semo', 2)]
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is simply a test 2',
      'https://www.recipetineats.com/wp-content/uploads/2018/09/Honey-Garlic-Chicken-Breast_5.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Amala', 2)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number){
    return this.recipes[id]
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  addRecipes(recipes: Recipe[]){
    this.recipes.push(...recipes);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
