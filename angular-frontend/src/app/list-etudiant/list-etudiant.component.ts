import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../etudiant'
import { EtudiantService } from '../etudiant.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {
  etudiants: Etudiant[];

  constructor(private etudiantService: EtudiantService,
    private router: Router) { }

  ngOnInit(): void {
  }

  private getEtudiants() {
    this.etudiantService.getEtudiantsList().subscribe(data => {
      this.etudiants = data;
    });
  }

  etudiantDetails(id: number) {
    this.router.navigate(['etudiant-details', id]);
  }

  updateEtudiant(id: number) {
    this.router.navigate(['update-etudiant', id]);
  }

  deleteEtudiant(id: number) {
    this.etudiantService.deleteEtudiant(id).subscribe(data => {
      console.log(data);
      this.getEtudiants();
    })
  }

}
