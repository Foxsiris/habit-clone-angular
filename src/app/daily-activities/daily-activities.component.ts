import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-activities',
  templateUrl: './daily-activities.component.html',
  styleUrls: ['./daily-activities.component.css']
})
export class DailyActivitiesComponent implements OnInit {
  title = 'Ежедневные дела'
  types = ['Все', 'Текущие', 'Прочие']
  constructor() { }

  ngOnInit(): void {
  }

}
