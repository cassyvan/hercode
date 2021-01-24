import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  

  blogList: { 
    name: string,
    file: string,
    dateOfPublish: string,
    tags: string [],
    author: string 
  }[] = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(JSON.parse(this.route.snapshot.queryParamMap.get('displayList')))
  }

}
