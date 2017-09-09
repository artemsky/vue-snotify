import { SnotifyConfig } from '../interfaces/SnotifyConfig.interface';
/**
 * Toast main model
 */
export declare class SnotifyToast {
    id: number;
    title: string;
    body: string;
    config: SnotifyConfig;
    constructor(id: number, title: string, body: string, config?: SnotifyConfig);
}
