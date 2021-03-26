import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  title = 'Задачи'
  types = ['Активные', 'С датой', 'Сделанные']
  constructor() { }

  ngOnInit(): void {
  }

}
