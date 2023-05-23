import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IPost} from "../../../../interfaces";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  constructor(private router:Router,private activatedRoute: ActivatedRoute) {}
  @Input()
  post:IPost;
  @Output()
  selectedPost = new EventEmitter<IPost>();
  setSelectedPost():void {
    this.selectedPost.emit(this.post)
  }
  getDetails():void {
    this.router.navigate([this.post.userId], {relativeTo: this.activatedRoute, state: this.post})
  }
}
