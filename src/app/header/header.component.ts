import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo = 'Logo';
  headerLinks = [
    {
      name:'Задачи',
      route:'/tasks'
    },
    {
      name:'Инвентарь',
      route:'/inventory'
    },
    {
      name:'Лавки',
      route:'/shop'
    },
    {
      name:'Помощь',
      route:'/help'
    },
  ]
  gold = 0;
  diamonds = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

}
