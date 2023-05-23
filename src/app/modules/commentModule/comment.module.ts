import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentRoutingModule } from './comment-routing.module';
import {CommentPageComponent} from "./pages/comment-page/comment-page.component";
import {CommentsComponent} from "./components/comments/comments.component";
import {CommentDetailsPageComponent} from "./pages/comment-details-page/comment-details-page.component";
import {CommentComponent} from "./components/comment/comment.component";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";


@NgModule({
  declarations: [
    CommentPageComponent,
    CommentDetailsPageComponent,
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule
  ]
})
export class CommentModule {
  constructor() {
    console.log('CommentModule');
  }
}
