import { FilmsService } from 'src/app/services/films.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-film',
  templateUrl: './details-film.component.html',
  styleUrls: ['./details-film.component.css']
})
export class DetailsFilmComponent implements OnInit {
    nomFilm :string='';
    descFilm :string='';
  constructor(private filmsService :FilmsService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'] - 1;
    this.nomFilm=this.filmsService.getFilmParId(+id).nom + this.nomFilm;
    this.descFilm=this.filmsService.getFilmParId(+id).description + this.descFilm;
  }




}
