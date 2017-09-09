/**
 * Buttons config.
 * By default there are two buttons exists only on type PROMPT & CONFIRM.
 *
 * Default - 1st button | 2nd button
 */
export interface SnotifyButton {
    /**
     * Button text
     * @type {string}
     * @default 'Yes' | 'Cancel'
     */
    text: string;
    /**
     * Action which will be called after button click
     * @type {function}
     * @param text? {string}
     * @returns {void}
     * @default null | () => this.remove(id)
     */
    action?: (id?: number, text?: string) => void;
    /**
     * Should button text be bold.
     * @default true | false
     */
    bold?: boolean;
}
