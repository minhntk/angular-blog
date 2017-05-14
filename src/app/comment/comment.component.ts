import { Component, OnInit } from '@angular/core';
import {EditorModule,SharedModule} from 'primeng/primeng';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  private _comment: string;
  constructor() { }

  ngOnInit() {
  }

  get comment(){
    return this._comment;
  }

  set comment(value: string){
    this._comment = value;
  }

}
