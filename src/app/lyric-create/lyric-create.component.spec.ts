import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricCreateComponent } from './lyric-create.component';

describe('LyricCreateComponent', () => {
  let component: LyricCreateComponent;
  let fixture: ComponentFixture<LyricCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyricCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
