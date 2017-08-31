/**
 * Toast model
 */
export class SnotifyToast {
  id;
  title;
  body;
  config;

  /**
   *
   * @param {number} id
   * @param {string} title
   * @param {string} body
   * @param {SnotifyConfig} [config]
   */
  constructor (id, title, body, config) {
    this.id = id
    this.title = title
    this.body = body
    this.config = config
  }
}
