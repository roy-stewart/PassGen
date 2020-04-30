export enum CriteriaUsageState {
    DO_NOT_USE,
    CAN_USE,
    MUST_INCLUDE
}

export function isUsable(state: CriteriaUsageState): boolean {
    return state === CriteriaUsageState.CAN_USE ||
        state === CriteriaUsageState.MUST_INCLUDE;
}
