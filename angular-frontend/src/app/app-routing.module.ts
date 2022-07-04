import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { CreateEtudiantComponent } from './create-etudiant/create-etudiant.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { DetailsEtudiantComponent } from './details-etudiant/details-etudiant.component';

const routes: Routes = [
  {path: 'etudiants', component: ListEtudiantComponent},
  {path: 'create-etudiant', component: CreateEtudiantComponent},
  {path: '', redirectTo: 'etudiants', pathMatch: 'full'},
  {path: 'update-etudiant/:id', component: UpdateEtudiantComponent},
  {path: 'etudiant-details/:id', component: DetailsEtudiantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }