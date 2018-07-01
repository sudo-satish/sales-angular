import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = localStorage.getItem('token');
        let url = environment.url;
        url += req.url;
        
        const copiedReq = req.clone({
            headers: req.headers.append('Authorization', 'Bearer ' + token), url: url
        });
        
        return next.handle(copiedReq);
    }
}