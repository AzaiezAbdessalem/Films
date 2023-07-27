import { FilmsService } from 'src/app/services/films.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-films',
  templateUrl: './ajouter-films.component.html',
  styleUrls: ['./ajouter-films.component.css']
})
export class AjouterFilmsComponent implements OnInit {

  constructor(private filmsService : FilmsService, private route :Router) { }

  ngOnInit(): void {
  }

  ajouterFilm(nom : string,desc:string){
    this.filmsService.ajouterFilm(nom,desc);
    alert(' Film Ajouté avec succés');
    this.route.navigate(['admin/lister-films']);

  }

}
