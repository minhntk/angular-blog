import { Component, OnInit } from '@angular/core';
import { BlogService }        from './shared/blog.service';
import { Blog }               from './shared/blog';

@Component({
  selector: 'app-blog',
  providers: [BlogService],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  private _blogs : Blog[] = [];
  private _blog: Blog;


  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this._blogs = this.getBlogs();
    this.blogService.getBlog().then((blog) => {
      this._blog = blog;
    });
  }

  get blogs(){
    return this._blogs;
  }

  set blogs(value: Blog[]){
    this._blogs = value;
  }

  getBlogs(){
    return this.blogService.getBlogs();
  }

}
