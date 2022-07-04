import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../etudiant';
import { EtudiantService } from '../etudiant.service';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-etudiant',
  templateUrl: './create-etudiant.component.html',
  styleUrls: ['./create-etudiant.component.css']
})
export class CreateEtudiantComponent implements OnInit {

  etudiant: Etudiant = new Etudiant();
  constructor(private etudiantService: EtudiantService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEtudiant(){
    this.etudiantService.createEtudiant(this.etudiant).subscribe( data =>{
      console.log(data);
      this.goToEtudiantList();
    },
    error => console.log(error));
  }

  goToEtudiantList(){
    this.router.navigate(['/etudiants']);
  }
  
  onSubmit(){
    console.log(this.etudiant);
    this.saveEtudiant();
  }
}