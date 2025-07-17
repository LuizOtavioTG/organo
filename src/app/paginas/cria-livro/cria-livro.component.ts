import { Component } from '@angular/core';
import { LivroService } from '../../services/livro.service';
import { Router } from '@angular/router';
import { Livro } from '../../componentes/livro/livro';
import { FormularioComponent } from '../../componentes/formulario/formulario.component';

@Component({
  selector: 'app-cria-livro',
  imports: [FormularioComponent],
  templateUrl: './cria-livro.component.html',
  styleUrl: './cria-livro.component.css'
})
export class CriaLivroComponent {

  constructor(
    private livroService: LivroService,
    private router: Router,
  ) { }

  criarLivro(livro: Livro) {
    this.livroService.adicionarLivro(livro).subscribe(() => {
      this.router.navigate(['lista-livros']);
    });
  }
}
