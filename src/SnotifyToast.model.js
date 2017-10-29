import Vue from 'vue';
import SnotifyStyle from './enums/SnotifyStyle.enum';
import SnotifyEvent from './enums/SnotifyEvent.enum';
/**
 * Toast model
 */
export class SnotifyToast {

  /**
   *
   * @param {number} id
   * @param {string} title
   * @param {string} body
   * @param {SnotifyToastConfig} [config]
   */
  constructor (id, title, body, config) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.config = config;

    this.eventEmitter = new Vue();
    this._eventsHolder = [];
    this.valid =  true;

    if (this.config.type === SnotifyStyle.prompt) {
      this.value = '';
    }
    this.on(SnotifyEvent.hidden, () => {
      this._eventsHolder.forEach((subscription) => {
        this.eventEmitter.$off(subscription);
      })
    })
  }

  /**
   * This callback is displayed as a global member.
   * @callback action
   * @param {toast} responseCode
   * @returns {void}
   */
  /**
   * Subscribe to toast events
   * @param {String<SnotifyEvent>} event
   * @param  {SnotifyToast~action} action
   * @returns {SnotifyToast}
   */
  on (event, action) {
    this._eventsHolder.push(
      this.eventEmitter.$on(event, () => {
        action(this);
      })
    );
    return this;
  }
}
