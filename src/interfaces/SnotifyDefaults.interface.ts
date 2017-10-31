// tslint:disable:no-trailing-whitespace
import {SnotifyToastConfig, SnotifyGlobalConfig} from '.';

/**
 * Global configuration object
 */
export interface SnotifyDefaults {
  global?: SnotifyGlobalConfig;
  toast?: SnotifyToastConfig;
  type?: {
    [key: string]: SnotifyToastConfig
  };
}
