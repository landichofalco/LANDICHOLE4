import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../../models/post.model';


@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [CommonModule,RouterLink,],
  templateUrl: './list-posts.html',
  styleUrls: ['./list-posts.css']
})

export class ListPosts implements OnInit {
  posts?: Post[] = [];
  post?: Post;
  id?: string;
  routeSub?: Subscription;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.initData();
  }

  initData(): void{
this.http.get<any>('https://localhost:7003/api/post').subscribe({
  next: (data) => {
    this.posts = Array.isArray(data) ? data : (data.$values || data.posts || []);
  },
  error: (err) => console.error("Error fetching posts:", err)});
  }
}
