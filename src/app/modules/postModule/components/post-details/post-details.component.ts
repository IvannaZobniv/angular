import {Component, OnInit} from '@angular/core';
import {IPost} from "../../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../../../services";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit{
  post: IPost;
  constructor(private activatedRoute: ActivatedRoute, private postService: PostService,private router: Router) {
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({userId}) =>{
      const state =this.router.getCurrentNavigation()?.extras.state as IPost;
      if (!state){
        this.postService.getById(userId).subscribe(value => this.post=value)
      }else {
        this.post =state
      }
    })
  }
}
