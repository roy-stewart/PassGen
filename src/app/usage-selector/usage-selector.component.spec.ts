import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageSelectorComponent } from './usage-selector.component';
import { CriteriaUsageState } from '../criteria-usage-state.enum';

describe('UsageSelectorComponent', () => {
  let component: UsageSelectorComponent;
  let fixture: ComponentFixture<UsageSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsageSelectorComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('writeValue', () => {
    it('should set selectedValue to the provided value', () => {
      const newValue = CriteriaUsageState.CAN_USE;
      component.writeValue(newValue);
      expect(component.selectedValue).toEqual(newValue);
    })
  });

  describe('updateSelectedValue', () => {
    it('should set selectedValue to the new value', () => {
      const newSelectedValue = CriteriaUsageState.DO_NOT_USE;
      component.updateSelectedValue(newSelectedValue);
      expect(component.selectedValue).toEqual(newSelectedValue);
    });

    it('should call the registered onChange callback with the new value, if there is one', () => {
      const onChangeCallback = () => {};
      const newSelectedValue = CriteriaUsageState.MUST_INCLUDE;
      component.registerOnChange(onChangeCallback);
      component.updateSelectedValue(newSelectedValue);
      expect(onChangeCallback).toHaveBeenCalledWith(newSelectedValue)
    });

    it('should call the registered onTouched callback if there is one', () => {
      const onTouchedCallback = () => {};
      const newSelectedValue = CriteriaUsageState.MUST_INCLUDE;
      component.registerOnTouched(onTouchedCallback);
      component.updateSelectedValue(newSelectedValue);
      expect(onTouchedCallback).toHaveBeenCalled();
    });
  });
});
