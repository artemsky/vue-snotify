import Vue from 'vue';
import {SnotifyToast} from './components/SnotifyToast/toast.model';
import {ToastDefaults} from './toastDefaults';
import {SnotifyToastConfig, Snotify, SnotifyDefaults} from './interfaces';
import {SnotifyStyle} from './enums';
import {SnotifyType} from './types';
import {TransformArgument} from './decorators/transform-argument.decorator';
import {mergeDeep, uuid} from './utils';
import {SetToastType} from './decorators/set-toast-type.decorator';

/**
 * SnotifyService - create, remove, config toasts
 */
// tslint:disable:unified-signatures
export class SnotifyService {
  static readonly emitter = new Vue();
  static notifications: SnotifyToast[] = [];
  static config: SnotifyDefaults = ToastDefaults;
  /**
   * emit changes in notifications array
   */
  static emit(): void {
    SnotifyService.emitter.$emit('snotify', SnotifyService.notifications.slice());
  }

  /**
   * returns SnotifyToast object
   * @param id {Number}
   * @return {SnotifyToast|undefined}
   */
  static get(id: number): SnotifyToast {
    return SnotifyService.notifications.find(toast => toast.id === id);
  }

  /**
   * add SnotifyToast to notifications array
   * @param toast {SnotifyToast}
   */
  static add(toast: SnotifyToast): void {
    if (SnotifyService.config.global.newOnTop) {
      SnotifyService.notifications.unshift(toast);
    } else {
      SnotifyService.notifications.push(toast);
    }
    SnotifyService.emit();
  }

  /**
   * If ID passed, emits toast animation remove, if ID & REMOVE passed, removes toast from notifications array
   * @param id {number}
   * @param remove {boolean}
   */
  static remove(id?: number, remove?: boolean): void {
    if (!id) {
      return SnotifyService.clear();
    } else if (remove) {
      SnotifyService.notifications = SnotifyService.notifications.filter(toast => toast.id !== id);
      return SnotifyService.emit();
    }
    SnotifyService.emitter.$emit('remove', id);
  }

  /**
   * Clear notifications array
   */
  static clear(): void {
    SnotifyService.notifications = [];
    SnotifyService.emit();
  }

  /**
   * Creates toast and add it to array, returns toast id
   * @param snotify {Snotify}
   * @return {number}
   */
  static create(snotify: Snotify): SnotifyToast {
    const config =
      mergeDeep(SnotifyService.config.toast, SnotifyService.config.type[snotify.config.type], snotify.config);
    const toast = new SnotifyToast(
      uuid(),
      snotify.title,
      snotify.body,
      config
    );
    SnotifyService.add(toast);
    return toast;
  }

  static setDefaults(defaults: SnotifyDefaults): SnotifyDefaults {
    return SnotifyService.config = mergeDeep(SnotifyService.config, defaults) as SnotifyDefaults;
  }

  /**
   * Create toast with simple style returns toast id;
   * @param body {String}
   * @returns {number}
   */
  static simple(body: string): SnotifyToast;
  /**
   * Create toast with simple style returns toast id;
   * @param body {String}
   * @param title {String}
   * @returns {number}
   */
  static simple(body: string, title: string): SnotifyToast;
  /**
   * Create toast with simple style returns toast id;
   * @param body {String}
   * @param config {SnotifyToastConfig}
   * @returns {number}
   */
  static simple(body: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Create toast with simple style  returns toast id;
   * @param [body] {String}
   * @param [title] {String}
   * @param [config] {SnotifyToastConfig}
   * @returns {number}
   */
  static simple(body: string, title: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Transform toast arguments into {Snotify} object
   */
  @TransformArgument
  /**
   * Determines current toast type and collects default configuration
   */
  @SetToastType
  static simple(args: any): SnotifyToast {
    return SnotifyService.create(args);
  }

  /**
   * Create toast with success style returns toast id;
   * @param body {String}
   * @returns {number}
   */
  static success(body: string): SnotifyToast;
  /**
   * Create toast with success style returns toast id;
   * @param body {String}
   * @param title {String}
   * @returns {number}
   */
  static success(body: string, title: string): SnotifyToast;
  /**
   * Create toast with success style returns toast id;
   * @param body {String}
   * @param config {SnotifyToastConfig}
   * @returns {number}
   */
  static success(body: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Create toast with success style  returns toast id;
   * @param [body] {String}
   * @param [title] {String}
   * @param [config] {SnotifyToastConfig}
   * @returns {number}
   */
  static success(body: string, title: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Transform toast arguments into {Snotify} object
   */
  @TransformArgument
  /**
   * Determines current toast type and collects default configuration
   */
  @SetToastType
  static success(args: any): SnotifyToast {
    return SnotifyService.create(args);
  }

  /**
   * Create toast with error style returns toast id;
   * @param body {String}
   * @returns {number}
   */
  static error(body: string): SnotifyToast;
  /**
   * Create toast with error style returns toast id;
   * @param body {String}
   * @param title {String}
   * @returns {number}
   */
  static error(body: string, title: string): SnotifyToast;
  /**
   * Create toast with error style returns toast id;
   * @param body {String}
   * @param config {SnotifyToastConfig}
   * @returns {number}
   */
  static error(body: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Create toast with error style  returns toast id;
   * @param [body] {String}
   * @param [title] {String}
   * @param [config] {SnotifyToastConfig}
   * @returns {number}
   */
  static error(body: string, title: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Transform toast arguments into {Snotify} object
   */
  @TransformArgument
  /**
   * Determines current toast type and collects default configuration
   */
  @SetToastType
  static error(args: any): SnotifyToast {
    return SnotifyService.create(args);
  }

  /**
   * Create toast with info style returns toast id;
   * @param body {String}
   * @returns {number}
   */
  static info(body: string): SnotifyToast;
  /**
   * Create toast with info style returns toast id;
   * @param body {String}
   * @param title {String}
   * @returns {number}
   */
  static info(body: string, title: string): SnotifyToast;
  /**
   * Create toast with info style returns toast id;
   * @param body {String}
   * @param config {SnotifyToastConfig}
   * @returns {number}
   */
  static info(body: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Create toast with info style  returns toast id;
   * @param [body] {String}
   * @param [title] {String}
   * @param [config] {SnotifyToastConfig}
   * @returns {number}
   */
  static info(body: string, title: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Transform toast arguments into {Snotify} object
   */
  @TransformArgument
  /**
   * Determines current toast type and collects default configuration
   */
  @SetToastType
  static info(args: any): SnotifyToast {
    return SnotifyService.create(args);
  }

  /**
   * Create toast with warning style returns toast id;
   * @param body {String}
   * @returns {number}
   */
  static warning(body: string): SnotifyToast;
  /**
   * Create toast with warning style returns toast id;
   * @param body {String}
   * @param title {String}
   * @returns {number}
   */
  static warning(body: string, title: string): SnotifyToast;
  /**
   * Create toast with warning style returns toast id;
   * @param body {String}
   * @param config {SnotifyToastConfig}
   * @returns {number}
   */
  static warning(body: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Create toast with warning style  returns toast id;
   * @param [body] {String}
   * @param [title] {String}
   * @param [config] {SnotifyToastConfig}
   * @returns {number}
   */
  static warning(body: string, title: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Transform toast arguments into {Snotify} object
   */
  @TransformArgument
  /**
   * Determines current toast type and collects default configuration
   */
  @SetToastType
  static warning(args: any): SnotifyToast {
    return SnotifyService.create(args);
  }

  /**
   * Create toast with confirm style returns toast id;
   * @param body {String}
   * @returns {number}
   */
  static confirm(body: string): SnotifyToast;
  /**
   * Create toast with confirm style returns toast id;
   * @param body {String}
   * @param title {String}
   * @returns {number}
   */
  static confirm(body: string, title: string): SnotifyToast;
  /**
   * Create toast with confirm style returns toast id;
   * @param body {String}
   * @param config {SnotifyToastConfig}
   * @returns {number}
   */
  static confirm(body: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Create toast with confirm style  returns toast id;
   * @param [body] {String}
   * @param [title] {String}
   * @param [config] {SnotifyToastConfig}
   * @returns {number}
   */
  static confirm(body: string, title: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Transform toast arguments into {Snotify} object
   */
  @TransformArgument
  /**
   * Determines current toast type and collects default configuration
   */
  @SetToastType
  static confirm(args: any): SnotifyToast {
    return SnotifyService.create(args);
  }

  /**
   * Create toast with Prompt style {with two buttons}, returns toast id;
   * @param body {String}
   * @returns {number}
   */
  static prompt(body: string): SnotifyToast;
  /**
   * Create toast with Prompt style {with two buttons}, returns toast id;
   * @param body {String}
   * @param title {String}
   * @returns {number}
   */
  static prompt(body: string, title: string): SnotifyToast;
  /**
   * Create toast with Prompt style {with two buttons}, returns toast id;
   * @param body {String}
   * @param config {SnotifyToastConfig}
   * @returns {number}
   */
  static prompt(body: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Create toast with Prompt style {with two buttons}, returns toast id;
   * @param [body] {String}
   * @param [title] {String}
   * @param [config] {SnotifyToastConfig}
   * @returns {number}
   */
  static prompt(body: string, title: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Transform toast arguments into {Snotify} object
   */
  @TransformArgument
  /**
   * Determines current toast type and collects default configuration
   */
  @SetToastType
  static prompt(args: any): SnotifyToast {
    return SnotifyService.create(args);
  }

  /**
   * Creates async toast with Info style. Pass action, and resolve or reject it.
   * @param body {String}
   * @param action {() => Promise<Snotify>}
   * @returns {number}
   */
  static async(body: string, action: () => Promise<Snotify>): SnotifyToast;
  /**
   * Creates async toast with Info style. Pass action, and resolve or reject it.
   * @param body {String}
   * @param title {String}
   * @param action {() => Promise<Snotify>}
   * @returns {number}
   */
  static async(body: string, title: string, action: () => Promise<Snotify>): SnotifyToast;
  /**
   * Creates async toast with Info style. Pass action, and resolve or reject it.
   * @param body {String}
   * @param action {() => Promise<Snotify>}
   * @param [config] {SnotifyToastConfig}
   * @returns {number}
   */
  static async(body: string, action: () => Promise<Snotify>, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Creates async toast with Info style. Pass action, and resolve or reject it.
   * @param body {String}
   * @param title {String}
   * @param action {() => Promise<Snotify>}
   * @param [config] {SnotifyToastConfig}
   * @returns {number}
   */
  static async(body: string, title: string, action: () => Promise<Snotify>, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Transform toast arguments into {Snotify} object
   */
  @TransformArgument
  /**
   * Determines current toast type and collects default configuration
   */
  @SetToastType
  static async(args: any): SnotifyToast {
    let async = args.action;

    const toast = SnotifyService.create(args);

    toast.on('mounted',
      () => {
      async()
        .then((next: Snotify) => SnotifyService.mergeToast(toast, next, SnotifyStyle.success))
        .catch((error?: Snotify) => SnotifyService.mergeToast(toast, error, SnotifyStyle.error));
      }
    );

    return toast;
  }

  static mergeToast(toast, next, type?: SnotifyType) {
    if (next.body) {
      toast.body = next.body;
    }
    if (next.title) {
      toast.title = next.title;
    }
    if (type) {
      toast.config = mergeDeep(toast.config, SnotifyService.config.global, SnotifyService.config.toast[type], {type}, next.config);
    } else {
      toast.config = mergeDeep(toast.config, next.config);
    }
    if (next.html) {
      toast.config.html = next.html;
    }
    SnotifyService.emit();
  }

  /**
   * Creates empty toast with html string inside
   * @param {string} html
   * @param {SnotifyToastConfig} config
   * @returns {number}
   */
  static html(html: string, config?: SnotifyToastConfig): SnotifyToast {
    return SnotifyService.create({
      title: null,
      body: null,
      config: {
        ...config,
        ...{html}
      }
    });
  }
}
