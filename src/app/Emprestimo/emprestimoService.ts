import { Injectable } from '@angular/core';
import { Emprestimo } from './emprestimo'; // tem q ter se for usar o tarefa.ts separado

@Injectable({
  providedIn: 'root',
})
export class emprestimoService {


   private Emprestimos: Emprestimo[] = [];


  private proximoId = 1;

  listar() {
    return this.Emprestimos;
  }

  
  adicionar(emprestimo: Emprestimo): void {
  emprestimo.id = this.proximoId++;
  emprestimo.devolvido = false;
  this.Emprestimos.push(emprestimo);
}


  remover(id: number): void {
    this.Emprestimos = this.Emprestimos.filter(emprestimo => emprestimo.id !== id);
  }

  registrarDevolucao(id: number): void {
    const emprestimo = this.Emprestimos.find(emprestimo => emprestimo.id === id);
    if (emprestimo) {
      emprestimo.devolvido = true;
    }

}
}