import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { CreateEtudiantComponent } from './create-etudiant/create-etudiant.component';
import { FormsModule} from '@angular/forms';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { DetailsEtudiantComponent } from './details-etudiant/details-etudiant.component'

@NgModule({
  declarations: [
    AppComponent,
    ListEtudiantComponent,
    CreateEtudiantComponent,
    UpdateEtudiantComponent,
    DetailsEtudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }