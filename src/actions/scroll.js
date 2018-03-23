export const SCROLL_Y_POSITION = "SCROLL_Y_POSITION"

export function scrollY(scrollYPos) {
  return {
    type: SCROLL_Y_POSITION,
    payload: scrollYPos
  }
}
