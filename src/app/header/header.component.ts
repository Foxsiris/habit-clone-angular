import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo = 'Logo';
  links = ['Задачи', 'Инвентарь', 'Лавки', 'Помощь'];
  gold = 0;
  diamonds = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

}
