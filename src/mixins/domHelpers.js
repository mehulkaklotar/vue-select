const DROPDOWN_EDGE_MARGIN = 30

/**
 * An object that contains offset values of an element.
 * @typedef {Object} Offset
 * @property {number} top
 * @property {number} left
 * @property {number} maxHeight
*/

module.exports = {
  /**
   * Get an element offset relative to the window.
   *
   * @param {HTMLElement} element - element to calculate offset for.
   * @returns {Offset} element offset object.
   */
  getOffset: function(element) {
    let el = element.offsetParent
    let parentEl = element.parentElement
    let top = element.offsetTop
    let left = element.offsetLeft
    let maxHeight

    while (parentEl) {
      if (el === parentEl) {
        top += el.offsetTop - el.scrollTop
        left += el.offsetLeft
        el = el.offsetParent
      } else {
        top -= parentEl.scrollTop
      }
      parentEl = parentEl.parentElement
    }

    if (typeof window === 'object') {
      maxHeight = window.innerHeight - top - DROPDOWN_EDGE_MARGIN
    }

    return {top, left, maxHeight}
  },

  /**
   * Positioning the dropdown list.
   * @param {HTMLElement} baseElement element to positioning relative of
   * @param {HTMLElement} targetElement element for positioning.
   * @param {string}      [aboveCssClass='above'] CSS class to apply
   * if target element should be positioning above the base element.
   */
  positionDropdown(baseElement, targetElement, aboveCssClass = 'above') {
    const offset = this.getOffset(baseElement)

    targetElement.style.minWidth = `${baseElement.offsetWidth}px`
    targetElement.style.left = `${offset.left}px`

    if (offset.maxHeight < targetElement.offsetHeight) {
      targetElement.style.top = `${offset.top - targetElement.offsetHeight + 1}px`
      targetElement.classList.add(aboveCssClass)
    } else {
      targetElement.style.top = `${offset.top + baseElement.offsetHeight - 1}px`
      targetElement.classList.remove(aboveCssClass)
    }
  }
}
