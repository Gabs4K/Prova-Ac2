import { Component } from '@angular/core';
import { emprestimoService } from '../Emprestimo/emprestimoService';
import { Emprestimo } from '../Emprestimo/emprestimo';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastrar-emprestimo',
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastrar-emprestimo.html',
  styleUrl: './cadastrar-emprestimo.css',
})
export class CadastrarEmprestimo {
  nomePessoa: string = '' ;
  tituloLivro: string = '';
  dataPrevistaDevolucao: string = '';

  constructor(private emprestimoService: emprestimoService) {}

  cadastrar(): void {
  if (this.tituloLivro === '' || this.nomePessoa === '' || this.dataPrevistaDevolucao === '') {
  alert('Preencha todos os campos!');
  return;
}

    const emprestimo: Emprestimo = {
      id: 0,
      tituloLivro: this.tituloLivro,
      nomePessoa: this.nomePessoa,
      dataPrevistaDevolucao: this.dataPrevistaDevolucao,
      devolvido: false
    };

    this.emprestimoService.adicionar(emprestimo);

    this.tituloLivro = '';
    this.nomePessoa = '';
    this.dataPrevistaDevolucao = '';
  }
}
