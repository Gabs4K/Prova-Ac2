import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { emprestimoService } from '../Emprestimo/emprestimoService';
import { Emprestimo } from '../Emprestimo/emprestimo';

@Component({
  selector: 'app-lista-emprestimos',
  imports: [RouterLink],
  templateUrl: './lista-emprestimos.html',
  styleUrl: './lista-emprestimos.css',
})
export class ListaEmprestimos {

  emprestimos: Emprestimo[] = [];

  constructor(private emprestimoService: emprestimoService) {
    this.atualizarLista();
  }

  atualizarLista(): void {
    this.emprestimos = this.emprestimoService.listar();
  }

  remover(id: number): void {
    this.emprestimoService.remover(id);
    this.atualizarLista();
  }

  concluir( id: number): void {
    this.emprestimoService.registrarDevolucao(id);
    this.atualizarLista();
  }
}

