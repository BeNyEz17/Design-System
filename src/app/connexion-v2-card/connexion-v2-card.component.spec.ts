import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionV2CardComponent } from './connexion-v2-card.component';

describe('ConnexionV2CardComponent', () => {
  let component: ConnexionV2CardComponent;
  let fixture: ComponentFixture<ConnexionV2CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionV2CardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnexionV2CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
