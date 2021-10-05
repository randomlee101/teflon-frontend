import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BemaComponent } from './bema.component';

describe('BemaComponent', () => {
  let component: BemaComponent;
  let fixture: ComponentFixture<BemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
