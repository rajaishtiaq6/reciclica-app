import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { AppRoutingModule } from '../../app-routing.module';
import { Router } from '@angular/router';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(), AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    router = TestBed.inject(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should got to pickup-calls on see all', () => {
    spyOn(router, 'navigate');

    component.goToPickupCalls();

    expect(router.navigate).toHaveBeenCalledWith(['pickup-calls']);

  });

  it('should got to pickup call on create pickup call', () => {
    spyOn(router, 'navigate');

    component.goToPickupCall();
    expect(router.navigate).toHaveBeenCalledWith(['pickup-call']);

  });

});
