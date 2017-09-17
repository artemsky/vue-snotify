import Vue = require("vue")
import {SnotifyConfig, SnotifyOptions} from './snotify/interfaces';
export * from './snotify/interfaces';
export * from './snotify/enum';
export * from "./vue";

export const install: Vue.PluginFunction<{config?: SnotifyConfig, options?: SnotifyOptions}>;
