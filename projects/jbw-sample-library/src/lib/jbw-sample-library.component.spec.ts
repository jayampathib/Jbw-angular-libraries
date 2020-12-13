import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JbwSampleLibraryComponent } from './jbw-sample-library.component';

describe('JbwSampleLibraryComponent', () => {
  let component: JbwSampleLibraryComponent;
  let fixture: ComponentFixture<JbwSampleLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JbwSampleLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JbwSampleLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
