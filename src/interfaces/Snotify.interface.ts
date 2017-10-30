import {SnotifyToastConfig} from './SnotifyToastConfig.interface';

/**
 * Snotify toast params
 */
export interface Snotify {
  /**
   * Toast Title
   * @type {string}
   */
  title?: string;
  /**
   * Toast message
   * @type {string}
   */
  body?: string;
  /**
   * Config object
   * @type {SnotifyToastConfig}
   */
  config?: SnotifyToastConfig;
  /**
   * Html content
   */
  html?: string;
}
