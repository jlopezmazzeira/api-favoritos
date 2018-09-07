import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { FavoritoService} from '../services/favoritos/favorito.service';
import { Favorito } from '../models/favorito';

@Component({
  selector: 'app-favoritos-list',
  templateUrl: './favoritos-list.component.html',
  styleUrls: ['./favoritos-list.component.css']
})
export class FavoritosListComponent implements OnInit {

  public title: string;
  public favoritos: Favorito[];
  public errorMessage;
  public loading: boolean;
  public confirmado;

  constructor(private _fs: FavoritoService) {
    this.title = 'Listado de Marcadores';
    this.loading = true;
  }

  ngOnInit() {
    this.getFavoritos();
  }

  getFavoritos(){
    this._fs.getFavoritos().subscribe(
      result => {
        this.favoritos = result.favoritos;
        console.log(this.favoritos);
        if(!this.favoritos){
          alert('Error en el servidor');
        } else {
          this.loading = false;
        }
      },
      error => {
        this.errorMessage = <any>error;
        if(this.errorMessage != null){
          console.log(this.errorMessage);
          alert('Error en la petición');
        }
      }
    );
  }

  onBorrarConfirm(id){
    this.confirmado = id;
  }

  onCancelarConfirm(){
    this.confirmado = null;
  }

  onBorrarFavorito(id){
    this._fs.deleteFavorito(id).subscribe(
      response => {
        if(!response.message){
          alert('Error en el servidor');
        } else {
          this.confirmado = null;
          this.getFavoritos();
        }
      },
      error => {
        this.errorMessage = <any>error;
        if(this.errorMessage != null){
          console.log(this.errorMessage);
          alert('Error en la petición');
        }
      }
    );
  }
}
