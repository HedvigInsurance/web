export const PERIL_SELECTED = "PERIL_SELECTED"

export function perilSelected(peril, category) {
  return {
    type: PERIL_SELECTED,
    payload: {
      peril,
      category
    }
  }
}
