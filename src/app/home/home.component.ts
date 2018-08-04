import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
  
  public allBlogs = [];
  constructor(public blogHttpService:BlogHttpService) { 
    console.log("Home Component Constructor called");
  }

  ngOnInit() {
    console.log("Home Component OnInit Called");

    // Observables should be handled using subscribe method
    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(
      data => {
        console.log(data);
        this.allBlogs = data["data"];
        console.log(data);
      },
      error => {
        console.log("Some error occured");
        console.log(error.errorMessage);
      }
    )
    console.log(this.allBlogs);
    
  }

  ngOnDestroy() {
    console.log("Home Component On Destroy Called");
  }

}
