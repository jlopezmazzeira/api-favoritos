import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { appRoutingProviders, routing} from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FavoritoAddComponent } from './favorito-add/favorito-add.component';
import { FavoritoEditComponent } from './favorito-edit/favorito-edit.component';
import { FavoritosListComponent } from './favoritos-list/favoritos-list.component';
import { FavoritoDetailComponent } from './favorito-detail/favorito-detail.component';

import { FavoritoService} from './services/favoritos/favorito.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritosListComponent,
    FavoritoDetailComponent,
    FavoritoAddComponent,
    FavoritoEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule
  ],
  providers: [
    FavoritoService,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
