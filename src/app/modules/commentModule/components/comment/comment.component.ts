import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IComment} from "../../../../interfaces";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  constructor(private router:Router,private activatedRoute: ActivatedRoute) {}
  @Input()
  comment:IComment;
  @Output()
  selectedComment = new EventEmitter<IComment>();
  setSelectedComment():void {
    this.selectedComment.emit(this.comment)
  }
  getDetails():void {
    this.router.navigate([this.comment.postId], {relativeTo: this.activatedRoute, state: this.comment})
  }
}
