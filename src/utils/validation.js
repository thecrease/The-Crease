import { CommonMessages } from './messages';

export const ValidationRules = {
  email: [
    {
      required: true,
      type: 'email',
      message: 'Please provide valid Email',
    },
  ],
  mobile: [
    {
      required: true,
      type: 'string',
      pattern: /^((\+92)|(0092)|0)\d{3}\d{7}$/,
      message: 'Please provide valid mobile number',
    },
  ],
  password: [
    {
      required: true,
      whitespace: true,
      message: 'Please provide a valid password',
    },
    {
      min: 8,
      message: 'Password should have atleast 8 Characters',
    },
  ],
  confirmPassword: [
    {
      required: true,
      message: 'Please confirm your password',
    },
    ({ getFieldValue }) => ({
      validator(rule, value) {
        if (!value || getFieldValue('password') === value) {
          return Promise.resolve();
        }
        return Promise.reject('Passwords do not match');
      },
    }),
  ],
  required: [
    {
      required: true,
      whitespace: true,
    },
  ],
  positiveNumber: [
    {
      type: 'number',
      min: 0,
    },
  ],
  positiveInteger: [
    {
      pattern: /^\d+$/,
      min: 0,
      message: CommonMessages.validationFailed,
    },
  ],
  maxLength: (maxLength = 50, required = false, message) => {
    return [
      {
        required,
        message: CommonMessages.validationRequired,
      },
      () => ({
        validator(rule, value) {
          if (!value || value.length <= maxLength) {
            return Promise.resolve();
          }
          return Promise.reject(message || `Length should be less than ${maxLength} characters`);
        },
      }),
    ];
  },
};
