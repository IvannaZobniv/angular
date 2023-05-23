import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../contants";
import {IPost} from "../interfaces/post.interfaces";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(urls.posts.posts)
  }
  getById(id:number):Observable<IPost>{
    return this.httpClient.get<IPost>(urls.posts.byId(id))
  }
}
