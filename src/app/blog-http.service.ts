import { Injectable } from '@angular/core';

// Importing http client to make the requests.

import {HttpClient, HttpErrorResponse} from '@angular/common/http';

// import observable related code.
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs;
  public currentBlog;

  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  private authToken ='YWFhYzMwMWY5YjNiM2Q1ZGRlYmQ3ZjYzZWJkNDExN2RkY2IwZWRhODhiMjY0NTMwZmVmMDhlYmJmOTdmMGYzOTViN2YyM2QzMmExMTI0OGM4ZDllNGM0Yzk2ZjQwYzE0MzQ4M2Y4MDczODEyYThhZGU0NzM2NjNiYjJkYTYzYTIzNWUz';

  constructor(private _http:HttpClient) {
    console.log("Blog http service was called");
   }

  //  Exception handler.

  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http Calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

  public getAllBlogs(): any {
    let myResponse = this._http.get(this.baseUrl +`/all?authToken=${this.authToken}`);
    console.log(myResponse);
    return myResponse;
  }
  
  public getCurrentBlog(currentBlogId): any {
    console.log(currentBlogId);
    
    let myResponse = this._http.get(this.baseUrl + `/view/${currentBlogId}?authToken=${this.authToken}`);
    console.log(myResponse);
    return myResponse;
  }


}
