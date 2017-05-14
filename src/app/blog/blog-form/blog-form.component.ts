import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {

  private _title: string;
  private _description: string;
  private _privacy: string;
  constructor() { }

  ngOnInit() {
  }

  get description(){
    return this._description;
  }

  set description(value: string){
    this._description = value;
  }

}
