import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero-data',
  templateUrl: './hero-data.component.html',
  styleUrls: ['./hero-data.component.css']
})
export class HeroDataComponent implements OnInit {
  urlPhoto = 'https://www.meme-arsenal.com/memes/a8cd3223d24bc50c5aed7c57ad329d10.jpg'
  health = 90
  expirince = 70
  level = 6
  class = 'Воин'
  nickName = 'Meliodos'
  activeModal = false
  constructor() {
  }

  ngOnInit(): void {
  }
  modalActive(){
    this.activeModal = !this.activeModal
  }

}
