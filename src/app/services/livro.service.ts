import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneroLiterario, Livro } from '../componentes/livro/livro';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private API_URL = "http://localhost:3001/livros"

  generos: GeneroLiterario[] = [
    { id: 'romance', value: 'Romance' },
    { id: 'misterio', value: 'Mistério' },
    { id: 'fantasia', value: 'Fantasia' },
    { id: 'ficcao-cientifica', value: 'Ficção Científica' },
    { id: 'tecnicos', value: 'Técnicos' }
  ];

  constructor(private httpClient: HttpClient) { }

  obterLivros(): Observable<Livro[]> {
    return this.httpClient.get<Livro[]>(this.API_URL);
  }
  organizarLivrosPorGenero(): Observable<Map<string, Livro[]>> {
    return this.obterLivros().pipe(
      map((livros: Livro[]) => {
        const livrosPorGenero = new Map<string, Livro[]>();

        livros.forEach((livro: Livro) => {
          const generoId = typeof livro.genero === 'string' ? livro.genero : livro.genero?.id;

          if (generoId) {
            if (!livrosPorGenero.has(generoId)) {
              livrosPorGenero.set(generoId, [])
            }
            livrosPorGenero.get(generoId)?.push(livro)
          }
        })
        return livrosPorGenero
      })
    )
  }
  adicionarLivro(novoLivro: Livro): Observable<Livro>{
    return this.httpClient.post<Livro>(this.API_URL, novoLivro )
  }
}

