import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-habbits',
  templateUrl: './habbits.component.html',
  styleUrls: ['./habbits.component.css']
})
export class HabbitsComponent implements OnInit {
  title = 'Привычки'
  types = ['Все', 'Сильные', 'Слабые']

  constructor() {
  }

  ngOnInit(): void {
  }

}
