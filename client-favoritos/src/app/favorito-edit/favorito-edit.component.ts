import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { FavoritoService} from '../services/favoritos/favorito.service';
import { Favorito } from '../models/favorito';

@Component({
  selector: 'app-favorito-edit',
  templateUrl: './favorito-edit.component.html',
  styleUrls: ['./favorito-edit.component.css']
})
export class FavoritoEditComponent implements OnInit {
  public titleSection: string;
  public favorito: Favorito;
  public errorMessage;

  constructor(private _fs: FavoritoService,
              private _route: ActivatedRoute,
              private _router: Router) {
    this.titleSection = 'Editar Marcador';
  }

  ngOnInit() {
    this.favorito = new Favorito("", "", "", "");
    this.getFavorito();
  }

  getFavorito(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._fs.getFavorito(id).subscribe(
        response => {
          this.favorito = response.favorito;
          if(!this.favorito){
            this._router.navigate(['/']);
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
    });
  }

  onSubmit(){
    this._fs.editFavorito(this.favorito).subscribe(
      response => {

        if(!response.favorito){
          alert('Error en el servidor');
        } else {
          this.favorito = response.favorito;
          this._router.navigate(['/favorito', this.favorito._id]);
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
