import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMergeDiffComponent } from './switch-merge-diff.component';

describe('SwitchMergeDiffComponent', () => {
  let component: SwitchMergeDiffComponent;
  let fixture: ComponentFixture<SwitchMergeDiffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchMergeDiffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchMergeDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
