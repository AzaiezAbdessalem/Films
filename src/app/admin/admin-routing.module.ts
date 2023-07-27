import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AjouterFilmsComponent } from './ajouter-films/ajouter-films.component';
import { DetailsFilmComponent } from './details-film/details-film.component';
import { ListerFilmsComponent } from './lister-films/lister-films.component';

const routes: Routes = [{
  path: '', component: AdminComponent,
  children: [
  {path: 'ajouter-films', component: AjouterFilmsComponent},
  {path: 'lister-films', component: ListerFilmsComponent },
  { path: 'details/:id', component: DetailsFilmComponent },
  ] ,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
