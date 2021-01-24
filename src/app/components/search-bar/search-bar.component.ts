import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import * as blogPosts from '../../../assets/blog-posts/blogPosts.json';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  template: '<input type="keyword" placeholder="Search" (input)="search()">'
})
export class SearchBarComponent {
  constructor(private router: Router) { }

  search(event: KeyboardEvent): void{
    if(event.keyCode === 13){

      const userInput = (<HTMLInputElement>event.target).value;
      let resultsList = [];
      for (let i = 0; i <blogPosts.listOfPosts.length; i++){
        if(blogPosts.listOfPosts[i].tags.includes(userInput)){
          resultsList.push(blogPosts.listOfPosts[i]);
        }
      }
      let navExtras: NavigationExtras = {
        queryParams: {
          displayList: resultsList
        }
      }
      this.router.navigate(["/blog"], navExtras);
    }
  }

}

// const message = {
//   name: 'kevin',
//   age: 12,
//   sayHello: function () {
//     console.log('hi')
//   },
// }

// console.log(message.name)