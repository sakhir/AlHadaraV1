import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MouhamadiyaatPage } from './mouhamadiyaat.page';

describe('MouhamadiyaatPage', () => {
  let component: MouhamadiyaatPage;
  let fixture: ComponentFixture<MouhamadiyaatPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MouhamadiyaatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MouhamadiyaatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
