/**
 * Toast model
 */
export class SnotifyToast {
  /**
   *
   * @param {number} id
   * @param {string} title
   * @param {string} body
   * @param {SnotifyConfig} [config]
   */
  constructor (id, title, body, config) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.config = config;
  }
}
