import {Input} from '@angular/core';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal-habbit',
  templateUrl: './modal-habbit.component.html',
  styleUrls: ['./modal-habbit.component.css']
})
export class ModalHabbitComponent implements OnInit {
  @Input() modalActive

  constructor() {
  }

  ngOnInit(): void {
  }

  closeModal() {
    this.modalActive = !this.modalActive
  }

}
