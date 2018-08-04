import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importing the router module.
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogCreateComponent,
    BlogEditComponent,
    BlogViewComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      {path:'about', component:AboutComponent},
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'blog/:blogId', component:BlogViewComponent},
      {path:'edit/:blogId', component:BlogEditComponent},
      {path:'create', component:BlogCreateComponent},
      {path:'**', component:NotFoundComponent}
    ])
  ],
  providers: [
    BlogService,
    BlogHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
