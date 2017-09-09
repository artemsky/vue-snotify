/**
 * Snotify animation params
 * If you want more animations, you can include animate.css or write animations yourself in your styles
 * Then you'll need to share this styles with snotify component [ng-snotify] component.
 */
export interface SnotifyAnimate {
    /**
     * In animation
     * @type {'fadeOutLeft' | 'fadeOutRight' | 'fadeOutUp' | 'fadeOutDown' | string}
     *
     * @default Depends on toast position
     */
    enter: 'fadeInLeft' | 'fadeInRight' | 'fadeInUp' | 'fadeInDown' | string;
    /**
     * Out animation
     * @type {'fadeOutLeft' | 'fadeOutRight' | 'fadeOutUp' | 'fadeOutDown' | string}
     * @default Depends on toast position
     */
    exit: 'fadeOutLeft' | 'fadeOutRight' | 'fadeOutUp' | 'fadeOutDown' | string;
    /**
     * Animation time in ms
     * @type {number}
     * @default 400
     */
    time: number;
}
