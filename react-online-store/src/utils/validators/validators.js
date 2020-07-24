export const required = value => {
  if (value) return undefined;
  return "Field is required";
}

export const maxLengthCreator = maxLength => value =>
  value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined;

export const phoneNumber = value =>
  value && !/^([0-9]{10})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined;

export const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;

  export const maxValue = max => value =>
  value && value > max ? `Must be at least ${max}` : undefined;


