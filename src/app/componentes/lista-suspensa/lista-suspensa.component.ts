import { Component, forwardRef, input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { GeneroLiterario } from '../livro/livro';
import { LivroService } from '../../services/livro.service';

@Component({
  selector: 'app-lista-suspensa',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './lista-suspensa.component.html',
  styleUrl: './lista-suspensa.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ListaSuspensaComponent),
      multi: true
    },
  ],
})
export class ListaSuspensaComponent implements ControlValueAccessor, OnInit {
  label = input<string>();
  id = input<string>();
  opcoes: GeneroLiterario[] = [];

  private innerValue: any;

  constructor(private livroService: LivroService){}

   ngOnInit(): void {
    this.opcoes = this.livroService.generos;
  }

  get value() {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChange(v);
    }
  }

  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(v: string): void {
    this.value = v;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
 
}
