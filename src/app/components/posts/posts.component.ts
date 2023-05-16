import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../interfaces";
import {PostService} from "../../services";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  @Input()
  userId: number;
  posts: IPost[];

  constructor(private postService: PostService) {}

  ngOnInit():void {
    this.postService.getPostByUserId(this.userId).subscribe(value => this.posts = value)
  }

}
