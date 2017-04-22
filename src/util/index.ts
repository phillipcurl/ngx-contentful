export function isQueryString(input: any): boolean {
  const inputStr: string = String(input);
  if (inputStr.indexOf('=') > -1) {
    return true;
  }
  if (inputStr.indexOf('&') > -1) {
    return true;
  }
  if (inputStr.indexOf('?') > -1) {
    return true;
  }
  return false;
};
