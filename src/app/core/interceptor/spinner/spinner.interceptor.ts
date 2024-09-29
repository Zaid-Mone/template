import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, filter, finalize, Observable, retry, throwError } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private spinner: NgxSpinnerService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.spinner.show();

// users => 
    return next.handle(request).pipe(
      finalize(() => {
        this.spinner.hide();
      }),
      catchError((error) => {
        if (error) {
          this.spinner.hide();
        }
        return throwError(error);
      })
    );
  }
}
