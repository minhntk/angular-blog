import { Injectable } from '@angular/core';
import { BLOGS }     from './mock-blog';

@Injectable()
export class BlogService {


  getBlogs() { 
    return BLOGS; 
  }

}
