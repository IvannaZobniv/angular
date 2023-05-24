import { ResolveFn } from '@angular/router';
import {IPost} from "../../interfaces";
import {inject} from "@angular/core";
import {UserService} from "../user.service";
import {PostService} from "../post.service";

export const postDetailResolver: ResolveFn<IPost> = (route, state) => {
  const postService = inject(PostService);
  const {id} = route.params;
  return postService.getById(id)
};
