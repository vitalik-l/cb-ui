/* eslint-disable import/prefer-default-export */

export const REGEXP = {
  password: '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$',
  username: '^[a-zA-Z0-9_.-]{1,20}$',
};
