import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path : 'crisis-list', component : CrisisListComponent},
  {path : 'heroes-list', component : HeroesListComponent},
  {path : '', redirectTo : '/heroes-list', pathMatch : 'full'},
  {path : '**', component: PageNotFoundComponent}
  //Notice that the wildcard route is placed at the end of the array. 
  // The order of your routes is important, as Angular applies routes in order and uses the first match it finds.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
