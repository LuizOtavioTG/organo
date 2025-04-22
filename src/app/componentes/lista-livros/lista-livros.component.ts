import { Component } from '@angular/core';
import { GeneroLiterario, Livro } from '../livro/livro';

@Component({
  selector: 'app-lista-livros',
  imports: [],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})
export class ListaLivrosComponent implements OnInit {
  generos: GeneroLiterario[] = [];
  livrosPorGenero: Map<string, Livro[]> = new Map();
}
