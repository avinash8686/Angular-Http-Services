import { Component, OnInit, OnDestroy } from '@angular/core';

// Importing the Activated Route from router.
import {ActivatedRoute, Router} from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit, OnDestroy {

  public currentBlog;

  

  constructor(private _route:ActivatedRoute, private router: Router, private blogHttpService:BlogHttpService) { 
    console.log("blog View Constructor called");
    
  }
  
  ngOnInit() {
    let currentBlogId = this._route.snapshot.paramMap.get('blogId');
    
    console.log("blog View OnInit called");
    console.log(currentBlogId);
    // console.log(this.blogService.getAllBlogs());
    //  this.currentBlog = this.blogHttpService.getCurrentBlog(currentBlogId);

    // this.currentBlog = this.blogHttpService.getCurrentBlog(currentBlogId);

    // console.log(this.currentBlog);

    // Observables should be handled using subscribe method
     this.blogHttpService.getCurrentBlog(currentBlogId).subscribe(
      data => {
        console.log(data);
        this.currentBlog = data["data"];
        console.log(this.currentBlog);
      },
      error => {
        console.log("Some error occured");
        console.log(error.errorMessage);
      }
    )
    // console.log(this.currentBlog);
  }

  

  ngOnDestroy() {
    console.log("Blog View Destroy called");
  }
}
