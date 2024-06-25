import * as Yup from 'yup';

const calculateAge = (dob) => {
  const birthDate = new Date(dob);
  const difference = Date.now() - birthDate.getTime();
  const ageDate = new Date(difference);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z ]+$/, 'Name must only contain letters and spaces')
    .required('Name is required'),

  mobileNumber: Yup.string()
    .matches(/^\d{10}$/, 'Mobile number must be exactly 10 digits')
    .required('Mobile number is required'),

  dob: Yup.date()
    .max(new Date(), 'Date of birth cannot be in the future')
    .nullable()
    .required('Date of birth is required')
    .test('is-old-enough', 'You must be at least 13 years old', (value) => {
      return calculateAge(value) >= 13;
    }),

  gender: Yup.string()
    .oneOf(['male', 'female', 'other'], 'Invalid gender')
    .required('Gender is required'),
});

export default registerSchema;
