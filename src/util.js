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
export function generateRandomId () {
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
