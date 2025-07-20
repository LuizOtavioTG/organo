import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const erroInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((erro: HttpErrorResponse) => {
      const mensagemErro = 'Ops, ocorreu um erro'
      return throwError(() => erro)
    })
  )
};
