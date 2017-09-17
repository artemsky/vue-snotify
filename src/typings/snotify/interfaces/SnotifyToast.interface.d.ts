import { SnotifyConfig } from './';
/**
 * Toast main model
 */
export interface SnotifyToast {
    id: number;
    title: string;
    body: string;
    config: SnotifyConfig;
    constructor(id: number, title: string, body: string, config?: SnotifyConfig);
}
