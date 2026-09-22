import { Component } from '@angular/core';

@Component({
  selector: 'app-ex9',
  standalone: false,
  templateUrl: './ex9.html',
  styleUrl: './ex9.scss',
})
export class Ex9 {
  nome = 'Mouse';
quantidade = 0;
menos: boolean = false;

diminuir(){
  if(this.quantidade > 0){
    this.quantidade--;
  }
}
aumentar(){
  this.quantidade++;
}
}
