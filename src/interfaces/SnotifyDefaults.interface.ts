// tslint:disable:no-trailing-whitespace
import {SnotifyToastConfig} from './SnotifyToastConfig.interface';
import {SnotifyGlobalConfig} from './SnotifGlobalConfig.interface';

/**
 * Global configuration object
 */
export interface SnotifyDefaults {
  global?: SnotifyGlobalConfig,
  toast?: SnotifyToastConfig,
  type?: {
    [key: string]: SnotifyToastConfig
  }
}
