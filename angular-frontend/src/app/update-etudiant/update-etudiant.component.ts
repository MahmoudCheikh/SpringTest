import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../etudiant.service';
import { Etudiant } from '../etudiant';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})

export class UpdateEtudiantComponent implements OnInit {

  id: number;
  etudiant: Etudiant = new Etudiant();
  constructor(private etudiantService: EtudiantService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.etudiantService.getEtudiantById(this.id).subscribe(data => {
      this.etudiant = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.etudiantService.updateEtudiant(this.id, this.etudiant).subscribe(data => {
      this.goToEtudiantList();
    }
      , error => console.log(error));
  }

  goToEtudiantList() {
    this.router.navigate(['/etudiants']);
  }
}