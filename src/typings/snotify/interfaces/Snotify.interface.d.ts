import { SnotifyConfig } from './SnotifyConfig.interface';
/**
 * Snotify toast params
 */
export interface Snotify {
    /**
     * Toast Title
     * @type {string}
     */
    title: string;
    /**
     * Toast message
     * @type {string}
     */
    body: string;
    /**
     * Config object
     * @type {SnotifyConfig}
     */
    config?: SnotifyConfig;
}
