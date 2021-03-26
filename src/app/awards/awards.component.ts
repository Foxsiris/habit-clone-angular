import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {
  title = 'Награды'
  types = ['Все', 'Сезонные', 'Отложенные']
  items = [
    {
      imgUrl:'https://olaola.ru/image/cache/catalog/minecraft/aksessuary/36852/lamp_potion_4-1200x799.jpg',
      price: 70
    },
    {
      imgUrl:'https://ru-minecraft.ru/uploads/posts/2019-03/1551805351_636527573684425991.png',
      price: 80
    },
    {
      imgUrl:'https://allinminecraft.org/wp-content/uploads/2014/12/gruboe-zelie-glav.png',
      price: 90
    },
    {
      imgUrl:'https://static.wikia.nocookie.net/minecraft-mojang/images/c/c5/%D0%94%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D1%8C%D0%B5_%D0%B4%D1%8B%D1%85%D0%B0%D0%BD%D0%B8%D0%B5.png/revision/latest?cb=20181129145054&path-prefix=ru',
      price: 170
    },
    {
      imgUrl:'https://lh3.googleusercontent.com/proxy/dofkOelpbTV9BY-OnGRJQebV37W1t5j0N27zPHmhBsGlkGBoWhP_ilJSg2vW1hxF8HCnA6Lhu82XuJ_rrcqt_5j_ux9I6rSyOHqruWGgHq9EiDQLCQhK',
      price: 270
    },
    {
      imgUrl:'https://lh3.googleusercontent.com/proxy/Hkekc1aIwqBG3ObGbkxAJb9cbuPw22CzzOhnC49Cn8GYuKKJKK6vNvwVnCKcITQon2Dsu1_4kECGeN8ucbaTcT1WZVpY59gqP8BAjkgPULlfJL-xfSvU',
      price: 370
    },
    {
      imgUrl:'https://azminecraft.ru/_ld/19/88419308.png',
      price: 250
    },
    {
      imgUrl:'http://magazin-detskij.ru/images/thumbnails/465/465/detailed/8/mech-almazny-mainkraft-2.png',
      price: 140
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
