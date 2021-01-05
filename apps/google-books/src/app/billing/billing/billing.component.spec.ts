import { RouterTestingModule } from '@angular/router/testing';
import { reducers } from './../../store/books.selector';
import { StoreModule } from '@ngrx/store';
import { BooksFacade } from './../../store/books.fascade';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  inject,
} from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BillingComponent } from './billing.component';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BillingComponent', () => {
  let component: BillingComponent;
  let fixture: ComponentFixture<BillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        StoreModule.forRoot(reducers),
      ],
      declarations: [BillingComponent],
      providers: [BooksFacade],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('on submit should add book to collction and navigate to collection page', fakeAsync(() => {
    const router = TestBed.inject(Router);
    const facade = TestBed.inject(BooksFacade);
    const spy = spyOn(router, 'navigate');
    const spy1 = spyOn(facade, 'addUser');
    component.onSubmit();
    tick(2500);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(spy).toBeCalledWith(['/collection']);
      expect(spy1);
    });
  }));

  it('fetch error method should fetch all error ', () => {
    const name = component?.customerFrom.controls.name;
    expect(name.valid).toBeFalsy();

    name.setValue('');
    expect(name.hasError('required')).toBeTruthy();

    name.setValue('a');
    expect(name.hasError('minlength')).toBeTruthy();
    component.fetchError();
    fixture.detectChanges();
    expect(component.errors).toBeDefined();
  });
});
