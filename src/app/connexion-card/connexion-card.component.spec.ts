import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionCardComponent } from './connexion-card.component';

describe('ConnexionCardComponent', () => {
  let component: ConnexionCardComponent;
  let fixture: ComponentFixture<ConnexionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnexionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
