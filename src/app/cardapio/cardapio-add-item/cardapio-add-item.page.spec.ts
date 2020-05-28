import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardapioAddItemPage } from './cardapio-add-item.page';

describe('CardapioAddItemPage', () => {
  let component: CardapioAddItemPage;
  let fixture: ComponentFixture<CardapioAddItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardapioAddItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardapioAddItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
