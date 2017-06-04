import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions  } from '@angular/http';    
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private http: Http) {}

  login(payload: any): Observable<string> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:3000/api/auth/login', JSON.stringify(payload), options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  private extractData(res: Response) {
    let body = res.json();
    if(body.token) {
      this.isLoggedIn = true;
      return body.token;
    }
    return '';
  }

   private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}