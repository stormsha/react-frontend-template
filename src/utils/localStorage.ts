/**
 * 删除本地缓存
 * @param {String} name
 */
export const localStorageRemoveItem = (name: string) =>
  localStorage.removeItem(name);

/**
 * 本地缓存
 * @param {String} name
 * @param {any} object
 */
export const localStorageSetItem = <Input>(name: string, object: Input) => {
  localStorageRemoveItem(name);
  localStorage.setItem(name, JSON.stringify(object));
};

/**
 * 获取本地缓存
 * @param {String} name
 * @returns any
 */
export const localStorageGetItem = (name: string) =>
  JSON.parse(localStorage.getItem(name)!);

/**
 * 判断本地缓存是否有
 * @param {String} name
 * @returns Boolean
 */
export const isLocalStorageGetItem = (name: string) =>
  !(localStorageGetItem(name) === null);

/**
 * 清空缓存
 */
export const localStorageRemoveItemAll = () => localStorage.clear();
