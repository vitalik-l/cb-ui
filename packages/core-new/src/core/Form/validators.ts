export const composeValidators = (...validators: Array<any>) => (value: any) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const validator = (fn: any, message: string) => (value: any) =>
  fn(value) ? undefined : message;

export const validateEmail = (email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const regexp = (regexpValue: RegExp) => (value: any) => {
  return regexpValue.test(String(value).toLowerCase());
};

export const required = (value: any) => value !== undefined && value !== null && value !== '';

export const minLength = (length: number) => (value: any) => value.length >= length;

export const maxLength = (length: number) => (value: any) => value.length <= length;

export const max = (maxNumber: number) => (value: any) => +value <= maxNumber;

export const min = (minNumber: number) => (value: any) => +value >= minNumber;
