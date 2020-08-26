import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatalogoIncidenciasPage } from './catalogo-incidencias.page';

describe('CatalogoIncidenciasPage', () => {
  let component: CatalogoIncidenciasPage;
  let fixture: ComponentFixture<CatalogoIncidenciasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoIncidenciasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogoIncidenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
