import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nota1: number = 8;
  nota2: number = 5;
  nota3: number = 9;
  nota4: number = 7 ;
  mediaResultado: number = 0;
  aprovado: boolean = false;
  mediaData: string = '2021-10-20'
  foto: string = 'assets/img/media.jpeg';
  constructor() {
    this.mediaResultado = (this.nota1 + this.nota2 + this.nota3 + this.nota4) / 4;
      this.aprovado = this.mediaResultado >= 7
      console.log  ('Sua Média é ', this.mediaResultado);
  }
  ngOnInit(): void {
  }
}
