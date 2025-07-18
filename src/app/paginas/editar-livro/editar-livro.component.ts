import { Component, OnInit } from '@angular/core';
import { FormularioComponent } from '../../componentes/formulario/formulario.component';
import { Livro } from '../../componentes/livro/livro';
import { ActivatedRoute } from '@angular/router';
import { LivroService } from '../../services/livro.service';

@Component({
  selector: 'app-editar-livro',
  imports: [FormularioComponent],
  templateUrl: './editar-livro.component.html',
  styleUrl: './editar-livro.component.css'
})
export class EditarLivroComponent implements OnInit {
  livro!: Livro;

  constructor(
    private livroService: LivroService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // //Chamada direta com snapshot
    // const id = this.activatedRoute.snapshot.paramMap.get("id");
    // if (id) {
    //   this.livroService.obterLivroPorId(id).subscribe((livro) => {
    //     this.livro = livro;
    //   });
    // }

    
  }
}
