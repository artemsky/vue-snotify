import {SnotifyPosition} from './enums/SnotifyPosition.enum';
import {SnotifyStyle} from './enums/SnotifyStyle.enum';

/**
 * Snotify default configuration object
 * @type {SnotifyDefaults}
 */
export const ToastDefaults = {
  global: {
    newOnTop: true,
    maxOnScreen: 8,
    maxAtPosition: 8
  },
  toast: {
    type: SnotifyStyle.simple,
    showProgressBar: true,
    timeout: 2000,
    closeOnClick: true,
    pauseOnHover: true,
    bodyMaxLength: 150,
    titleMaxLength: 16,
    backdrop: -1,
    icon: null,
    html: null,
    position: SnotifyPosition.rightBottom,
    animation: {enter: 'fadeIn', exit: 'fadeOut', time: 400}
  },
  type: {
    [SnotifyStyle.prompt]: {
      timeout: 0,
      closeOnClick: false,
      buttons: [
        {text: 'Ok', action: null, bold: true},
        {text: 'Cancel', action: null, bold: false},
      ],
      placeholder: 'Enter answer here...',
      type: SnotifyStyle.prompt,
    },
    [SnotifyStyle.confirm]: {
      timeout: 0,
      closeOnClick: false,
      buttons: [
        {text: 'Ok', action: null, bold: true},
        {text: 'Cancel', action: null, bold: false},
      ],
      type: SnotifyStyle.confirm,
    },
    [SnotifyStyle.simple]: {
      type: SnotifyStyle.simple
    },
    [SnotifyStyle.success]: {
      type: SnotifyStyle.success
    },
    [SnotifyStyle.error]: {
      type: SnotifyStyle.error
    },
    [SnotifyStyle.warning]: {
      type: SnotifyStyle.warning
    },
    [SnotifyStyle.info]: {
      type: SnotifyStyle.info
    },
    [SnotifyStyle.async]: {
      pauseOnHover: false,
      closeOnClick: false,
      timeout: 0,
      showProgressBar: false,
      type: SnotifyStyle.async
    }
  }
};
