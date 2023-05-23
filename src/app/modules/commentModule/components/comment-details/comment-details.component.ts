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
  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService,private router: Router) {
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({postId}) =>{
      const state =this.router.getCurrentNavigation()?.extras.state as IComment;
      if (!state){
        this.commentService.getById(postId).subscribe(value => this.comment=value)
      }else {
        this.comment =state
      }
    })
  }
}
