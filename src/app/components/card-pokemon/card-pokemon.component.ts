import { Component, OnInit } from '@angular/core';

import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit {

  pokemons: any[] = [];

  constructor(private serviceApi: PokeApiService) { }

  ngOnInit() {
    this.serviceApi.getList().subscribe((response: any) => {
      response.results.forEach(res => {
        this.serviceApi.getData(res.name).subscribe((result: any) => {
          this.pokemons.push(result);
          console.log(this.pokemons);
        });
      });
    });
  }

  

}
