import { Component } from '@angular/core';  
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { ListaLivrosComponent } from './componentes/lista-livros/lista-livros.component';
@Component({
  selector: 'app-root',
  imports: [CabecalhoComponent, 
    RodapeComponent, 
    ListaLivrosComponent, 
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'organo';
}
