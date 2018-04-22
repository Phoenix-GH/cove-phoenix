import validator from 'validator';

export const required = value => (value ? undefined : 'Required');
export const email = value => (value && validator.isEmail(value) ? undefined : 'Invalid email address');
export const phoneNumber = value => (
  value && !/^\d{3}-\d{3}-\d{4}$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined);
export const ccExp = value => (
  value && !/^\d{2}\/\d{2}$/i.test(value)
    ? 'Invalid exp, must be 4 digits'
    : undefined
);
export const fullName = value => (
  (value && !/^[a-zA-Z\.\'\-]{2,50}(?: [a-zA-Z\.\'\-]{2,50})+$/.test(value))
    ? 'Please include first and last name'
    : undefined
);

const minLength = min => value => (
  value && value.length < min ? `Must be ${min} characters or more` : undefined
);
export const creditCard = value => (
  validator.isCreditCard(value) ? 'Invalide credit card number' : undefined
);
export const cvv = value => (
  (!validator.isNumeric(value) && value.length > 4 && value.length < 3) ? 'Must be a 3 or 4 digit number' : undefined
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

export const normalizeExp = (value) => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 2) {
    return onlyNums;
  }

  return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2, 4)}`;

};