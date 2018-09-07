import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title: string;
  public desciption: string;

  constructor() {
    this.title = 'Web SPA con Angular';
    this.desciption = 'Aplicación con el stack MEAN'
  }

  ngOnInit() {
  }

}
