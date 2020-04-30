import { Component, OnInit, ViewChild, forwardRef, AfterViewInit, ViewChildren } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CriteriaUsageState } from '../criteria-usage-state.enum';
import { IonSelect } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-usage-selector',
  templateUrl: './usage-selector.component.html',
  styleUrls: ['./usage-selector.component.scss'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => UsageSelectorComponent),
    }
  ]
})
export class UsageSelectorComponent implements ControlValueAccessor {

  selectedValue: CriteriaUsageState = CriteriaUsageState.MUST_INCLUDE;

  private onChange;
  private onTouched;

  usageTypes = CriteriaUsageState;

  constructor() {}

  writeValue(value):void {
    this.selectedValue = value;
  }

  registerOnChange(onChange): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched): void {
    this.onTouched = onTouched;
  }

  updateSelectedValue(value): void {
    this.selectedValue = value;
    this.onChange && this.onChange(value);
    this.onTouched && this.onTouched();
  }

}
