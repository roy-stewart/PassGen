import { FormGroup } from "@angular/forms";
import { isUsable, CriteriaUsageState } from "./criteria-usage-state.enum";

export namespace CriteriaValidators {

    export function criteriaTypeValidator(control: FormGroup): any | null {
        let errors = null;
        if (!isUsable(control.get('lowerUsage').value) && !isUsable(control.get('upperUsage').value) && !isUsable(control.get('numberUsage').value) && !isUsable(control.get('specialUsage').value))
            errors = {
                ...errors,
                invalidTypeSelection: 'Invalid Criteria: Please enable one or more character types to use when generating passwords.'
            };
        return errors;
    }

    export function criteriaLengthValidator(control: FormGroup): any | null {
        let errors = null;
        const numberOfRequiredTypes = [control.get('lowerUsage').value, control.get('upperUsage').value, control.get('numberUsage').value, control.get('specialUsage').value].filter(state => state === CriteriaUsageState.MUST_INCLUDE).length;
        if (control.get('length').value < numberOfRequiredTypes)
            errors = {
                lessThanRequiredTypes: 'Invalid length: The length must be equal to or greater than the number of character types that are set to "Must include".'
            };
        return errors;
    }

}
