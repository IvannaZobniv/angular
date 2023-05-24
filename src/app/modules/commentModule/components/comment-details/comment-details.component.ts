import {Component, OnInit} from '@angular/core';
import {IComment, IPost} from "../../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "../../../../services";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit{
  comment: IComment;
  constructor(private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({commentData})=>this.comment=commentData)
  }
}
