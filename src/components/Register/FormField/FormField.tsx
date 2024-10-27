import { ChangeEvent, useId, useState } from 'react';
import { FormFieldProps, TFormData } from '../types';
import './FormField.scss';

export default function FormField({
  type = 'text',
  label,
  placeholder,
  name,
  register,
  options = [],
  defaultValue,
  hasOtherOption = false,
  error
}: FormFieldProps) {
  const inputId = useId();

  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'Other') {
      setShowOtherInput(true);
    }
  };

  return (
    <div className="registration-textfield">
      <label htmlFor={inputId}>{label}</label>
      {type === 'select' ? (
        <>
          <div className="select-container">
            <select
              id={inputId}
              {...register(name)}
              defaultValue={defaultValue}
              onChange={handleSelectChange}
            >
              {options.map(value => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
              {hasOtherOption && <option value="Other">Other</option>}
            </select>
          </div>
          {showOtherInput && (
            <input
              type="text"
              placeholder="Please specify..."
              className="other-input"
              {...register(`${name}_other` as keyof TFormData)}
            />
          )}
        </>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          {...register(name)}
          id={inputId}
        />
      )}
      <span
        className="error-message"
        style={{ visibility: error ? 'visible' : 'hidden' }}
      >
        {error?.message}
      </span>
    </div>
  );
}
