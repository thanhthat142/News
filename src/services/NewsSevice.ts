import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseData } from "../app/shared/types/responseData";
import { NewItems } from "../app/shared/types/type-item";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getNews(): Observable<ResponseData<NewItems[]>> {
    return this.http.get<any>('https://ninedev-api.vercel.app/blogs');
  }
}