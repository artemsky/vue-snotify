import {SnotifyType} from '../types';
import {Snotify} from '../interfaces';

/**
 * Defines toast style depending on method name
 * @param target
 * @param {SnotifyType} propertyKey
 * @param {PropertyDescriptor} descriptor
 * @returns {{value: ((...args: any[]) => any)}}
 * @constructor
 */
export function SetToastType (target: any, propertyKey: SnotifyType, descriptor: PropertyDescriptor) {
  return {
    value: function (...args: any[]) {
      (args[0] as Snotify).config = {
        ...(args[0] as Snotify).config,
        type: propertyKey
      };
      return descriptor.value.apply(this, args);
    }
  };
}
