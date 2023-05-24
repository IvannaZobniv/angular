import { ResolveFn } from '@angular/router';
import {IComment} from "../../interfaces";
import {inject} from "@angular/core";
import {CommentService} from "../comment.service";

export const commentDetailResolver: ResolveFn<IComment> = (route, state) => {
  const commentService = inject(CommentService);
  const {id} = route.params;
  return commentService.getById(id)
};
