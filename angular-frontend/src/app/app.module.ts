import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEtudiantComponent } from './create-etudiant/create-etudiant.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { DetailsEtudiantComponent } from './details-etudiant/details-etudiant.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEtudiantComponent,
    UpdateEtudiantComponent,
    DetailsEtudiantComponent,
    ListEtudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
