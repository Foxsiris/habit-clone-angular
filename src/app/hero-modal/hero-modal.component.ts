import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero-modal',
  templateUrl: './hero-modal.component.html',
  styleUrls: ['./hero-modal.component.css']
})
export class HeroModalComponent implements OnInit {
  @Input() modalActive
  constructor() { }

  ngOnInit(): void {
  }
  closeModal(){
    this.modalActive=!this.modalActive
  }

}
