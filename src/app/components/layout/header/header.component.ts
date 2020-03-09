import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() url: string;
  urlTitle: string = 'Ir a página personal';

  constructor() { }

  ngOnInit() {
  }

}
