import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeResolverService } from './recipes/recipe-resolver.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch:'full' },
  { path: 'recipes', component: RecipesComponent, children:[
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent},
    { path: ':id', component: RecipeDetailsComponent, resolve:[RecipeResolverService]},
    { path: ':id/edit', component: RecipeEditComponent, resolve:[RecipeResolverService]}
  ] },
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
