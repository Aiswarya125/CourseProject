import { Injectable } from "@angular/core";
import { Subject } from "rxjs/internal/Subject";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
   recipesChanged = new Subject<Recipe[]>();

   // private recipes: Recipe[] = [
   //    new Recipe('Chocolate Cake', 'This is just awesome!', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg',
   //       [
   //          new Ingredient('Flour', 1),
   //          new Ingredient('Sugar', 2)

   //       ]),

   //    new Recipe('Vanilla Ice-Cream', 'Super easy homemade icecream!', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBGrIqvmREUyczqClB7oQAvMDTkXNggoIDFQ&usqp=CAU',
   //       [
   //          new Ingredient('Vanilla', 2),
   //          new Ingredient('Cherry', 6)
   //       ])
   // ];

   private recipes: Recipe[] =[];

   constructor(private slService: ShoppingListService) { }

   setRecipes(recipes: Recipe[]){
      this.recipes = recipes;
      this.recipesChanged.next(this.recipes.slice());
   }

   getRecipes() {
      return this.recipes.slice();
   }

   getRecipe(index: number) {
      return this.recipes[index];
   }

   addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
   }

   addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
   }

   updateRecipe(index: number, newRecipe: Recipe) {
      this.recipes[index] = newRecipe;
      this.recipesChanged.next(this.recipes.slice());

   }

   deleteRecipe(index: number) {
      this.recipes.splice(index, 1);
      this.recipesChanged.next(this.recipes.slice());
   }
}