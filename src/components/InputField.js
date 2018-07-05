import React from 'react';

const InputField = ({
  input,
  label,
  type,
  placeholder,
  required,
  readonly,
  leftIcon,
  rightIcon,
  meta: { touched, error }
}) => {
  let isError = touched && (typeof error !== 'undefined');
  let requiredSpan = required && (<span className="required">*</span>);
  if (readonly) {
    input.onChange = null;
  }

  const hasIconLeft = leftIcon ? ' has-icons-left' : '';
  const hasIconRight = rightIcon ? ' has-icons-right' : '';
  const controlClass = `control${hasIconLeft}${hasIconRight}`;

  return (
    <div className="field">
      {label &&
        <label className="label">{label} {requiredSpan}</label>
      }
      <p className={controlClass}>
        <input onChange={input.onChange} className="input" type={type} placeholder={placeholder}/>
        {
          leftIcon &&
          <span className="icon is-small is-left">
            <i className={leftIcon}></i>
          </span>
        }
        {
          rightIcon &&
          <span className="icon is-small is-right">
            <i className={rightIcon}></i>
          </span>
        }
      </p>
      {
        isError &&
        <p className="help is-danger">{error}</p>
      }  
    </div>
  );
};

export default InputField;
