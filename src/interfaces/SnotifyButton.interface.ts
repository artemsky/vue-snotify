import {SnotifyToast} from '../components/toast.model';
/**
 * Buttons config.
 */

/**
 * Buttons config
 */
export interface SnotifyButton {
  /**
   * SnotifyButton text
   * @type {string}
   */
  text: string;
  /**
   * Action which will be called after button click
   * @type {function}
   * @param text? {string}
   * @returns {void}
   * @default this.remove(id)
   */
  action?: (toast: SnotifyToast) => void;
  /**
   * Should button text be bold.
   */
  bold?: boolean;
  /**
   * Additional className.
   */
  className?: string;
}
