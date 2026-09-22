import { Component } from '@angular/core';

@Component({
  selector: 'app-ex11',
  standalone: false,
  templateUrl: './ex11.html',
  styleUrl: './ex11.scss',
})
export class Ex11 {
  nome = 'Mouse Gamer';
quantidade = 1;
valor = 100;
mensagem = '';

diminuir(){
  if(this.quantidade > 1){
    this.quantidade--;
  }
}
aumentar(){
  this.quantidade++;
}
adicionar(){
  this.mensagem = this.quantidade + ' '+ this.nome + ' adicionados'
  }
}
