import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PizzasPage } from './pizzas.page';

describe('PizzasPage', () => {
  let component: PizzasPage;
  let fixture: ComponentFixture<PizzasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PizzasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
