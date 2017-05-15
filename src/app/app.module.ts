import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { CommentComponent } from './comment/comment.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import {EditorModule,SharedModule} from 'primeng/primeng';
import { BlogFormComponent } from './blog/blog-form/blog-form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard }                from './shared/auth-guard.service';
import { AuthService }                from './shared/auth.service';
import { ChatComponent } from './chat/chat.component';

const appRoutes: Routes = [
  { 
    path: '', 
    canActivate: [AuthGuard],
    component: BlogFormComponent 
  },
  { 
    path: 'login',
    component: LoginComponent
   },
  { path: 'blog/:id', component: BlogDetailComponent },
  { 
    path: 'blog-form', 
    canActivate: [AuthGuard],
    component: BlogFormComponent 
  },
];

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    CommentComponent,
    BlogDetailComponent,
    BlogFormComponent,
    HomeComponent,
    LoginComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    EditorModule,
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
