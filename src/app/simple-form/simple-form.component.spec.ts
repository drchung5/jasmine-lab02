import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFormComponent } from './simple-form.component';
import { By } from '@angular/platform-browser';

describe('SimpleFormComponent', () => {
  let component: SimpleFormComponent;
  let fixture: ComponentFixture<SimpleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept a value between 1-10', () => {
    component.numForm.controls.num.setValue("3")
    expect(component.numForm.valid).toBeTrue()
  })

  it('should enable the button if form is valid', () => {
    // make the form valid by setting a valid number and marking as dirty
    component.numForm.controls.num.setValue("9")
    component.numForm.markAsDirty()
    fixture.detectChanges();
    let buttonEL = fixture.debugElement.query(By.css("button"))
    expect(buttonEL.nativeElement.disabled ).toBeFalse()
  })
});
