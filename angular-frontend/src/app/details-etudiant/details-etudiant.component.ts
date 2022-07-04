import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../etudiant';
import { ActivatedRoute } from '@angular/router';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-details-etudiant',
  templateUrl: './details-etudiant.component.html',
  styleUrls: ['./details-etudiant.component.css']
})
export class DetailsEtudiantComponent implements OnInit {

  id: number
  etudiant: Etudiant
  constructor(private route: ActivatedRoute, private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.etudiant = new Etudiant();
    this.etudiantService.getEtudiantById(this.id).subscribe( data => {
      this.etudiant = data;
    });
  }
}