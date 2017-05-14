import { Injectable } from '@angular/core';
import { BLOGS }     from './mock-blog';
import { Blog }       from './blog';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BlogService {

  constructor(private http: Http) {}

  getBlogs() { 
    return BLOGS; 
  }

  getBlog(): Promise<Blog>{
    return this.http.get('/blog')
               .toPromise()
               .then((response) => response.json() as Blog)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
