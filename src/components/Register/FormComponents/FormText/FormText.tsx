import { useId } from 'react';
import './FormText.scss';

import { FormTextProps } from '../../types';

export default function FormText({
  label,
  placeholder,
  name,
  register,
  error
}: FormTextProps) {
  const inputId = useId();

  return (
    <div className="registration-textfield">
      <label htmlFor={inputId}>{label}</label>
      <input placeholder={placeholder} {...register(name)} id={inputId} />

      <span
        className="error-message"
        style={{ visibility: error ? 'visible' : 'hidden' }}
      >
        {error?.message}
      </span>
    </div>
  );
}
