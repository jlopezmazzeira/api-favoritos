import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Favorito } from '../../models/favorito';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {
  public url: string

  constructor(private _http: Http) {
    this.url = 'http://localhost:3678/api/';
  }

  getFavoritos(){
    return this._http.get(this.url+'favoritos')
                     .pipe(map(res => res.json()));
  }

  getFavorito(id: string){
    return this._http.get(this.url+'favorito/'+id)
                     .pipe(map(res => res.json()));
  }

  addFavorito(favorito: Favorito){
    let json = JSON.stringify(favorito);
    let params = json;
    let headers = new Headers({'Content-Type':'application/json'});

    return this._http.post(this.url+'favorito', params, {headers: headers})
                    .pipe(map(res => res.json()));
  }

  editFavorito(favorito: Favorito){
    let json = JSON.stringify(favorito);
    let params = json;
    let headers = new Headers({'Content-Type':'application/json'});

    return this._http.put(this.url+'favorito/'+favorito._id, params, {headers: headers})
                    .pipe(map(res => res.json()));
  }

  deleteFavorito(id: string){
    return this._http.delete(this.url+'favorito/'+id)
                     .pipe(map(res => res.json()));
  }
}
