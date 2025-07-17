import { Routes } from '@angular/router';

import { ListaLivrosComponent } from './paginas/lista-livros/lista-livros.component';
import { CriaLivroComponent } from './paginas/cria-livro/cria-livro.component';

export const routes: Routes = [
  {
    path: 'criar-livro',
    component: CriaLivroComponent
  },
  {
    path: 'lista-livros',
    component: ListaLivrosComponent
  },
  {
    path: '**',
    component: ListaLivrosComponent
  }

];
