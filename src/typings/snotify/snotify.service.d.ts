import { SnotifyOptions, SnotifyConfig, SnotifyToast } from './interfaces';
import { SnotifyAction } from './enum';
/**
 * SnotifyService - create, remove, config toasts
 */
export declare interface SnotifyService {
  notifications: SnotifyToast[];
  readonly config: SnotifyConfig;
  readonly options: SnotifyOptions;
  get(id: number): SnotifyToast;
  getAll(id: number): SnotifyToast[];
  emit(): void;
  setConfig(config: SnotifyConfig, options?: SnotifyOptions): void;
  add(toast: SnotifyToast);
  remove(id?: number): void;
  clear(): void;
  create(snotify: SnotifyToast): number;
  /**
   * Create toast with Success style, returns toast id;
   * @param body {String}
   * @param title {String}
   * @param config {SnotifyConfig}
   * @return {number}
   */
  success(body: string, title?: string, config?: SnotifyConfig): number;
  /**
   * Create toast with Error style, returns toast id;
   * @param body {String}
   * @param title {String}
   * @param config {SnotifyConfig}
   * @return {number}
   */
  error(body: string, title?: string, config?: SnotifyConfig): number;
  /**
   * Create toast with Info style, returns toast id;
   * @param body {String}
   * @param title {String}
   * @param config {SnotifyConfig}
   * @return {number}
   */
  info(body: string, title?: string, config?: SnotifyConfig): number;
  /**
   * Create toast with Warining style, returns toast id;
   * @param body {String}
   * @param title {String}
   * @param config {SnotifyConfig}
   * @return {number}
   */
  warning(body: string, title?: string, config?: SnotifyConfig): number;
  /**
   * Create toast without style, returns toast id;
   * @param body {String}
   * @param title {String}
   * @param config {SnotifyConfig}
   * @return {number}
   */
  simple(body: string, title?: string, config?: SnotifyConfig): number;
  /**
   * Create toast with Confirm style {with two buttons}, returns toast id;
   * @param body {String}
   * @param title {String}
   * @param config {SnotifyConfig}
   * @return {number}
   */
  confirm(body: string, title?: string, config?: SnotifyConfig): number;
  /**
   * Create toast with Prompt style {with two buttons}, returns toast id;
   * @param body {String}
   * @param title {String}
   * @param config {SnotifyConfig}
   * @return {number}
   */
  prompt(body: string, title?: string, config?: SnotifyConfig): number;
  /**
   * Creates async toast with Info style. Pass action, and resolve or reject it.
   * @param body {String}
   * @param title {String}
   * @param action {Promise<{body: string, title?: string, config?: SnotifyConfig}>}
   * @return {number}
   */
  async(body: string, title: string, action: () => Promise<{body: string, title?: string, config?: SnotifyConfig}>): number;
  /**
   * Creates empty toast with html string inside
   * @param {string} html
   * @param {SnotifyConfig} config
   * @returns {number}
   */
  html(html: string, config?: SnotifyConfig): number;
  $on(action: SnotifyAction | string, callback: (toast: SnotifyToast, value?: string) => void): void
  $emit(action: 'remove', id: number): void
}
