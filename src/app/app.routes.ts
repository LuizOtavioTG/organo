import { Routes } from '@angular/router';

import { ListaLivrosComponent } from './paginas/lista-livros/lista-livros.component';
import { CriaLivroComponent } from './paginas/cria-livro/cria-livro.component';
import { EditarLivroComponent } from './paginas/editar-livro/editar-livro.component';

export const routes: Routes = [
  {
    path: 'criar-livro',
    component: CriaLivroComponent
  },
  {
    path: 'editar-livro/:id',
    component: EditarLivroComponent
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
