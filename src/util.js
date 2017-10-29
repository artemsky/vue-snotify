/**
 * Simple is object check.
 * @param item {Object}
 * @returns {boolean}
 */
import SnotifyPosition from './enums/SnotifyPosition'

export function isObject (item) {
  return (item && typeof item === 'object' && !Array.isArray(item) && item !== null)
}

/**
 * Deep merge objects.
 * @param sources
 * @returns {Object}
 */
export function mergeDeep (...sources) {
  const target = {}
  if (!sources.length) {
    return target
  }

  while (sources.length > 0) {
    const source = sources.shift()
    if (isObject(source)) {
      for (const key in source) {
        if (isObject(source[key])) {
          target[key] = mergeDeep(target[key], source[key])
        } else {
          Object.assign(target, {[key]: source[key]})
        }
      }
    }
  }
  return target
}

/**
 * Generates random id
 * @return {number}
 */
export function uuid () {
  return Math.floor(Math.random() * (Date.now() - 1)) + 1
}

/**
 * Split toasts toasts into different objects
 * @param {SnotifyToast[]} toasts
 * @returns {SnotifyNotifications}
 */
export function sortNotificationsByPositions (toasts) {
  const result = {}

  for (const property in SnotifyPosition) {
    if (SnotifyPosition.hasOwnProperty(property)) {
      result[SnotifyPosition[property]] = []
    }
  }

  toasts.forEach((toast) => {
    result[toast.config.position].push(toast)
  })

  return result
}

/**
 * Generate default animation objects
 * @param defaultAnimationTime {number}
 * @returns {{}}
 */
export function generateAnimationDefaults (defaultAnimationTime) {
  return {
    [SnotifyPosition.leftTop]: {enter: 'fadeInLeft', exit: 'fadeOutLeft', time: defaultAnimationTime},
    [SnotifyPosition.leftCenter]: {enter: 'fadeInLeft', exit: 'fadeOutLeft', time: defaultAnimationTime},
    [SnotifyPosition.leftBottom]: {enter: 'fadeInLeft', exit: 'fadeOutLeft', time: defaultAnimationTime},
    [SnotifyPosition.rightTop]: {enter: 'fadeInRight', exit: 'fadeOutRight', time: defaultAnimationTime},
    [SnotifyPosition.rightCenter]: {enter: 'fadeInRight', exit: 'fadeOutRight', time: defaultAnimationTime},
    [SnotifyPosition.rightBottom]: {enter: 'fadeInRight', exit: 'fadeOutRight', time: defaultAnimationTime},
    [SnotifyPosition.centerTop]: {enter: 'fadeInDown', exit: 'fadeOutUp', time: defaultAnimationTime},
    [SnotifyPosition.centerCenter]: {enter: 'fadeIn', exit: 'fadeOut', time: defaultAnimationTime},
    [SnotifyPosition.centerBottom]: {enter: 'fadeInUp', exit: 'fadeOutDown', time: defaultAnimationTime}
  }
}


/**
 * Toast configuration object
 * @typedef {Object} SnotifyConfig
 * @property {number} [timeout] Toast timeout in milliseconds. Disable timeout = 0
 * @property {boolean} [showProgressBar] Enable/Disable progress bar. Disabled if timeout is 0
 * @property {SnotifyType} [type] Type of toast, affects toast style.
 * @property {boolean} [closeOnClick] Should toast close on click?
 * @property {boolean} [pauseOnHover] Should timeout pause on hover?
 * @property {SnotifyButton[]} [buttons] Buttons config.
 * @property {string} [placeholder] Placeholder for Prompt toast
 * @property {number} [titleMaxLength] Toast title maximum length
 * @property {number} [bodyMaxLength] Toast body maximum length
 * @property {number} [titleMaxLength] Toast title maximum length
 * @property {number} [icon] Activate custom icon. You should provide full tag `<img src="assets/custom-icon.png"/>`
 * @property {number} [backdrop] Backdrop opacity. Range: `0.0 - 1.0`. Disabled: `-1`
 * @property {SnotifyAnimate} [animation] Animation config
 * @property {string} [html] Html string witch overrides toast content
 * @property {SnotifyPosition} [position] Toasts position on screen
 */

/**
 * Buttons configuration object
 * @typedef {Object} SnotifyButton
 * @property {string} text Button text
 * @property {SnotifyButton~action} [action] Action which will be called after button click
 * @property {boolean} [bold] Should button text be bold.
 */

/**
 * This callback is displayed as part of the Requester class.
 * @callback SnotifyButton~action
 * @param {number} [id]
 * @param {string} [text]
 */

/**
 * Animations configuration object
 * @typedef {Object} SnotifyAnimate
 * @property {('fadeOutLeft' | 'fadeOutRight' | 'fadeOutUp' | 'fadeOutDown' | string)} enter In animation
 * @property {('fadeOutLeft' | 'fadeOutRight' | 'fadeOutUp' | 'fadeOutDown' | string)} exit Out animation
 * @property {number} time Animation time in ms
 */

/**
 * Options configuration object
 * @typedef {Object} SnotifyOptions
 * @property {number} maxOnScreen Max toast items on screen.
 * @property {number} maxAtPosition Max toast items at single position.
 * @property {number} maxHeight Toast maximum height in pixels.
 * @property {boolean} [newOnTop] Should new items come from top or bottom side
 * @property {SnotifyPosition} [position] Toasts position on screen
 */
