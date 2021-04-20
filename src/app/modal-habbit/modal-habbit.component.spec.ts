import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHabbitComponent } from './modal-habbit.component';

describe('ModalHabbitComponent', () => {
  let component: ModalHabbitComponent;
  let fixture: ComponentFixture<ModalHabbitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalHabbitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHabbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
