import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpcionRegistroPage } from './opcion-registro.page';

describe('OpcionRegistroPage', () => {
  let component: OpcionRegistroPage;
  let fixture: ComponentFixture<OpcionRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionRegistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpcionRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
