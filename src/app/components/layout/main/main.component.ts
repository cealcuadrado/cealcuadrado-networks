import { Component, OnInit } from '@angular/core';
import { blogs } from '../../../constants/blogs';
import { Blog } from 'src/app/interfaces/blog';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  blogs: Blog[];

  constructor() { }

  ngOnInit() {
    this.blogs = blogs;
  }

}
