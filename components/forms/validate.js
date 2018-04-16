import validator from 'validator';

export const required = value => (value ? undefined : 'Required');
export const email = value => (value && validator.isEmail(value) ? undefined : 'Invalid email address');
export const phoneNumber = value => (
  value && !/^\d{3}-\d{3}-\d{4}$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined);
export const fullName = value => (
  (value && !/^[a-zA-Z\.\'\-]{2,50}(?: [a-zA-Z\.\'\-]{2,50})+$/.test(value))
    ? 'Please include first and last name'
    : undefined
);

const minLength = min => value => (
  value && value.length < min ? `Must be ${min} characters or more` : undefined
);

export const minLength6 = minLength(6);
export const zip = value => (value && validator.isLength(value, { min: 5, max: 5 }) ? undefined : 'Please use 5 digit US zipcode');
export const normalizePhone = (value) => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 3) {
    return onlyNums;
  }
  if (onlyNums.length <= 7) {
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
  }
  return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 6)}-${onlyNums.slice(
    6,
    10,
  )}`;
};
