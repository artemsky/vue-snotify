import { SnotifyToast } from './toast/snotify-toast.model';
import { SnotifyOptions } from './interfaces/SnotifyOptions.interface';
import { SnotifyConfig } from './interfaces/SnotifyConfig.interface';
import { SnotifyAction } from './enum/SnotifyAction.enum';
/**
 * SnotifyService - create, remove, config toasts
 */
export declare class SnotifyService {
  static notifications: SnotifyToast[];
  static readonly config: SnotifyConfig;
  static readonly options: SnotifyOptions;
  static get(id: number): SnotifyToast;
  static getAll(id: number): SnotifyToast[];
  private static emit(): void;
  static setConfig(config: SnotifyConfig, options?: SnotifyOptions): void;
  private static add(toast: SnotifyToast);
  static remove(id?: number): void;
  static clear(): void;
  private static create(snotify: SnotifyToast): number;
  /**
   * Create toast with Success style, returns toast id;
   * @param body {String}
   * @param title {String}
   * @param config {SnotifyConfig}
   * @return {number}
   */
  static success(body: string, title?: string, config?: SnotifyConfig): number;
  /**
   * Create toast with Error style, returns toast id;
   * @param body {String}
   * @param title {String}
   * @param config {SnotifyConfig}
   * @return {number}
   */
  static error(body: string, title?: string, config?: SnotifyConfig): number;
  /**
   * Create toast with Info style, returns toast id;
   * @param body {String}
   * @param title {String}
   * @param config {SnotifyConfig}
   * @return {number}
   */
  static info(body: string, title?: string, config?: SnotifyConfig): number;
  /**
   * Create toast with Warining style, returns toast id;
   * @param body {String}
   * @param title {String}
   * @param config {SnotifyConfig}
   * @return {number}
   */
  static warning(body: string, title?: string, config?: SnotifyConfig): number;
  /**
   * Create toast without style, returns toast id;
   * @param body {String}
   * @param title {String}
   * @param config {SnotifyConfig}
   * @return {number}
   */
  static simple(body: string, title?: string, config?: SnotifyConfig): number;
  /**
   * Create toast with Confirm style {with two buttons}, returns toast id;
   * @param body {String}
   * @param title {String}
   * @param config {SnotifyConfig}
   * @return {number}
   */
  static confirm(body: string, title?: string, config?: SnotifyConfig): number;
  /**
   * Create toast with Prompt style {with two buttons}, returns toast id;
   * @param body {String}
   * @param title {String}
   * @param config {SnotifyConfig}
   * @return {number}
   */
  static prompt(body: string, title?: string, config?: SnotifyConfig): number;
  /**
   * Creates async toast with Info style. Pass action, and resolve or reject it.
   * @param body {String}
   * @param title {String}
   * @param action {Promise<SnotifyConfig> | Observable<SnotifyConfig>}
   * @return {number}
   */
  static async(body: string, title: string, action: () => Promise<{body: string, title?: string, config?: SnotifyConfig}>): number;
  /**
   * Creates empty toast with html string inside
   * @param {string | SafeHtml} html
   * @param {SnotifyConfig} config
   * @returns {number}
   */
  static html(html: string, config?: SnotifyConfig): number;
  static $on(action: SnotifyAction | string, callback: (toast: SnotifyToast, value?: string) => void)
  static $emit(action: 'remove', id: number)
}
