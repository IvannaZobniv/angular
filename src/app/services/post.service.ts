import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urls} from "../contants";
import {Observable} from "rxjs";
import {IPost} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }
  getPostByUserId(id: number): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`${urls.users}/${id}/posts`)
  }
}
