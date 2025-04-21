import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {
livro = {
  titulo: "Um titulo qualquer",
  autoria: "Um autor qualquer"
}
}
