import Vue from 'vue';
import {SnotifyToast} from '../components/SnotifyToast/SnotifyToast.model';
import {Snotify, SnotifyToastConfig, SnotifyDefaults} from '.';
import {SnotifyType} from '../types/';

/**
 * SnotifyService - create, remove, config toasts
 */
// tslint:disable:unified-signatures
export declare interface SnotifyService {
  readonly emitter: Vue;
  notifications: SnotifyToast[];
  config: SnotifyDefaults;
  /**
   * emit changes in notifications array
   */
  emit(): void;
  /**
   * returns SnotifyToast object
   * @param id {Number}
   * @return {SnotifyToast|undefined}
   */
  get(id: number): SnotifyToast;

  /**
   * add SnotifyToast to notifications array
   * @param toast {SnotifyToast}
   */
  add(toast: SnotifyToast): void;

  /**
   * If ID passed, emits toast animation remove, if ID & REMOVE passed, removes toast from notifications array
   * @param id {number}
   * @param remove {boolean}
   */
  remove(id?: number, remove?: boolean): void;

  /**
   * Clear notifications array
   */
  clear(): void;
  /**
   * Creates toast and add it to array, returns toast id
   * @param snotify {Snotify}
   * @return {number}
   */
  create(snotify: Snotify): SnotifyToast;

  setDefaults(defaults: SnotifyDefaults): SnotifyDefaults;
  /**
   * Create toast with simple style returns toast id;
   * @param body {String}
   * @returns {number}
   */
  simple(body: string): SnotifyToast;
  /**
   * Create toast with simple style returns toast id;
   * @param body {String}
   * @param title {String}
   * @returns {number}
   */
  simple(body: string, title: string): SnotifyToast;
  /**
   * Create toast with simple style returns toast id;
   * @param body {String}
   * @param config {SnotifyToastConfig}
   * @returns {number}
   */
  simple(body: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Create toast with simple style  returns toast id;
   * @param [body] {String}
   * @param [title] {String}
   * @param [config] {SnotifyToastConfig}
   * @returns {number}
   */
  simple(body: string, title: string, config: SnotifyToastConfig): SnotifyToast;

  /**
   * Create toast with success style returns toast id;
   * @param body {String}
   * @returns {number}
   */
  success(body: string): SnotifyToast;
  /**
   * Create toast with success style returns toast id;
   * @param body {String}
   * @param title {String}
   * @returns {number}
   */
  success(body: string, title: string): SnotifyToast;
  /**
   * Create toast with success style returns toast id;
   * @param body {String}
   * @param config {SnotifyToastConfig}
   * @returns {number}
   */
  success(body: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Create toast with success style  returns toast id;
   * @param [body] {String}
   * @param [title] {String}
   * @param [config] {SnotifyToastConfig}
   * @returns {number}
   */
  success(body: string, title: string, config: SnotifyToastConfig): SnotifyToast;


  /**
   * Create toast with error style returns toast id;
   * @param body {String}
   * @returns {number}
   */
  error(body: string): SnotifyToast;
  /**
   * Create toast with error style returns toast id;
   * @param body {String}
   * @param title {String}
   * @returns {number}
   */
  error(body: string, title: string): SnotifyToast;
  /**
   * Create toast with error style returns toast id;
   * @param body {String}
   * @param config {SnotifyToastConfig}
   * @returns {number}
   */
  error(body: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Create toast with error style  returns toast id;
   * @param [body] {String}
   * @param [title] {String}
   * @param [config] {SnotifyToastConfig}
   * @returns {number}
   */
  error(body: string, title: string, config: SnotifyToastConfig): SnotifyToast;


  /**
   * Create toast with info style returns toast id;
   * @param body {String}
   * @returns {number}
   */
  info(body: string): SnotifyToast;
  /**
   * Create toast with info style returns toast id;
   * @param body {String}
   * @param title {String}
   * @returns {number}
   */
  info(body: string, title: string): SnotifyToast;
  /**
   * Create toast with info style returns toast id;
   * @param body {String}
   * @param config {SnotifyToastConfig}
   * @returns {number}
   */
  info(body: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Create toast with info style  returns toast id;
   * @param [body] {String}
   * @param [title] {String}
   * @param [config] {SnotifyToastConfig}
   * @returns {number}
   */
  info(body: string, title: string, config: SnotifyToastConfig): SnotifyToast;


  /**
   * Create toast with warning style returns toast id;
   * @param body {String}
   * @returns {number}
   */
  warning(body: string): SnotifyToast;
  /**
   * Create toast with warning style returns toast id;
   * @param body {String}
   * @param title {String}
   * @returns {number}
   */
  warning(body: string, title: string): SnotifyToast;
  /**
   * Create toast with warning style returns toast id;
   * @param body {String}
   * @param config {SnotifyToastConfig}
   * @returns {number}
   */
  warning(body: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Create toast with warning style  returns toast id;
   * @param [body] {String}
   * @param [title] {String}
   * @param [config] {SnotifyToastConfig}
   * @returns {number}
   */
  warning(body: string, title: string, config: SnotifyToastConfig): SnotifyToast;

  /**
   * Create toast with confirm style returns toast id;
   * @param body {String}
   * @returns {number}
   */
  confirm(body: string): SnotifyToast;
  /**
   * Create toast with confirm style returns toast id;
   * @param body {String}
   * @param title {String}
   * @returns {number}
   */
  confirm(body: string, title: string): SnotifyToast;
  /**
   * Create toast with confirm style returns toast id;
   * @param body {String}
   * @param config {SnotifyToastConfig}
   * @returns {number}
   */
  confirm(body: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Create toast with confirm style  returns toast id;
   * @param [body] {String}
   * @param [title] {String}
   * @param [config] {SnotifyToastConfig}
   * @returns {number}
   */
  confirm(body: string, title: string, config: SnotifyToastConfig): SnotifyToast;

  /**
   * Create toast with Prompt style {with two buttons}, returns toast id;
   * @param body {String}
   * @returns {number}
   */
  prompt(body: string): SnotifyToast;
  /**
   * Create toast with Prompt style {with two buttons}, returns toast id;
   * @param body {String}
   * @param title {String}
   * @returns {number}
   */
  prompt(body: string, title: string): SnotifyToast;
  /**
   * Create toast with Prompt style {with two buttons}, returns toast id;
   * @param body {String}
   * @param config {SnotifyToastConfig}
   * @returns {number}
   */
  prompt(body: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Create toast with Prompt style {with two buttons}, returns toast id;
   * @param [body] {String}
   * @param [title] {String}
   * @param [config] {SnotifyToastConfig}
   * @returns {number}
   */
  prompt(body: string, title: string, config: SnotifyToastConfig): SnotifyToast;

  /**
   * Creates async toast with Info style. Pass action, and resolve or reject it.
   * @param body {String}
   * @param action {() => Promise<Snotify>}
   * @returns {number}
   */
  async(body: string, action: () => Promise<Snotify>): SnotifyToast;
  /**
   * Creates async toast with Info style. Pass action, and resolve or reject it.
   * @param body {String}
   * @param title {String}
   * @param action {() => Promise<Snotify>}
   * @returns {number}
   */
  async(body: string, title: string, action: () => Promise<Snotify>): SnotifyToast;
  /**
   * Creates async toast with Info style. Pass action, and resolve or reject it.
   * @param body {String}
   * @param action {() => Promise<Snotify>}
   * @param [config] {SnotifyToastConfig}
   * @returns {number}
   */
  async(body: string, action: () => Promise<Snotify>, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Creates async toast with Info style. Pass action, and resolve or reject it.
   * @param body {String}
   * @param title {String}
   * @param action {() => Promise<Snotify>}
   * @param [config] {SnotifyToastConfig}
   * @returns {number}
   */
  async(body: string, title: string, action: () => Promise<Snotify>, config: SnotifyToastConfig): SnotifyToast;


  mergeToast(toast, next, type?: SnotifyType);

  /**
   * Creates empty toast with html string inside
   * @param {string} html
   * @param {SnotifyToastConfig} config
   * @returns {number}
   */
  html(html: string, config?: SnotifyToastConfig): SnotifyToast;
}
