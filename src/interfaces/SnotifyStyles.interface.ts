import {SnotifyType} from '../types/snotify.type';

/**
 * Toast styles
 */
export interface SnotifyStyles {
  simple: SnotifyType;
  success: SnotifyType;
  error: SnotifyType;
  warning: SnotifyType;
  info: SnotifyType;
  async: SnotifyType;
  confirm: SnotifyType;
  prompt: SnotifyType;
}
