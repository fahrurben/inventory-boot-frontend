const Validations = {
  required: (value) => (value ? undefined : 'Required'),
  select_required: (value) => ( typeof value === 'undefined' || value === null ? 'Must not empty' : undefined),
  email_phone: value =>
    value && 
      !(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ||
        /^[0-9+-/(/)]{6,20}$/i.test(value)
      )
      ? 'Not valid email address'
      : undefined,
  minLength: (min) => value => value && value.length <= min ? `Must be ${min} characters or more` : undefined,
  maxLength: (max) => value => value && value.length >= max ? `Must be same or less than ${max}` : undefined,    
  min8: (value) => value && value.length < 8 ? 'Minimal 8 characters' : undefined,
  max15: (value) => value && value.length > 15 ? 'Maximal 15 characters' : undefined,
  min_one_uppercase: value =>
    !/^(?=.*[A-Z]).+$/.test(value)
      ? 'Password must contain at least one uppercase'
      : undefined,
  min_one_number: value =>
    value && 
      !/^(?=.*\d).+$/i.test(value)
      ? 'Password must contain at least one number'
      : undefined,
  min_one_special: value =>
    value && 
      !/^(?=.*[!@#\$%\^&\*]).+$/i.test(value)
      ? 'Password must contain at least one special characters'
      : undefined   
}

export default Validations;