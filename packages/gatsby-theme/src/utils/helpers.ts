export function optionalChaining(func: Function) {
  try {
    return func();
  } catch (e) {
    return undefined;
  }
}
