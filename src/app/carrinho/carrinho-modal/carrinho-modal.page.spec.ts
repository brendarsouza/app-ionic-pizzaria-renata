import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarrinhoModalPage } from './carrinho-modal.page';

describe('CarrinhoModalPage', () => {
  let component: CarrinhoModalPage;
  let fixture: ComponentFixture<CarrinhoModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrinhoModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarrinhoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
