import { Component, OnInit } from '@angular/core';
import { BlogService }        from '../shared/blog.service';
import { Blog }               from '../shared/blog';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  private _blog: Blog;
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getBlog().then((blog) => {
      this._blog = blog;
      
      console.log(this._blog);
    });
  }

  get blog(){
    return this._blog;
  }

  set blog(value: Blog){
    this._blog = value;
  }


}
