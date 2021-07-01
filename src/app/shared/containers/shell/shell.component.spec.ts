import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellContainer } from './shell.container';

describe('ShellContainer', () => {
  let component: ShellContainer;
  let fixture: ComponentFixture<ShellContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellContainer]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
