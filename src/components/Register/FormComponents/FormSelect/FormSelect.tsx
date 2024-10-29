import { useId, useState } from 'react';
import './FormSelect.scss';
import {
  Button,
  Key,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue
} from 'react-aria-components';
import { Controller } from 'react-hook-form';
import SelectArrow from '@/components/Icons/SelectArrow';
import Checkmark from '@/components/Icons/Checkmark';
import { FormSelectProps, TFormData } from '../../types';

export default function FormSelect({
  label,
  name,
  control,
  options = [],
  defaultValue,
  hasOtherOption = false,
  width = 'auto',
  error
}: FormSelectProps) {
  const inputId = useId();

  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleSelectChange = (key: Key) => {
    if (key === 'Other') {
      setShowOtherInput(true);
    } else {
      setShowOtherInput(false);
    }
  };

  return (
    <div className="registration-textfield">
      <label htmlFor={inputId}>{label}</label>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <Select
            aria-label={label}
            id={inputId}
            onSelectionChange={selectedValue => {
              onChange(selectedValue);
              handleSelectChange(selectedValue);
            }}
            selectedKey={value}
            className="register-select"
          >
            <Button style={{ width }}>
              <SelectValue />
              <span aria-hidden="true">
                <SelectArrow />
              </span>
            </Button>
            <Popover style={{ width }} placement="bottom" shouldFlip={false}>
              <ListBox>
                {options.map(option => (
                  <ListBoxItem
                    className="register-list-box-item"
                    key={option}
                    id={option}
                    textValue={option}
                  >
                    {({ isSelected }) => (
                      <div>
                        {option}
                        {isSelected && (
                          <span aria-hidden="true">
                            <Checkmark />
                          </span>
                        )}
                      </div>
                    )}
                  </ListBoxItem>
                ))}
                {hasOtherOption && (
                  <ListBoxItem
                    className="register-list-box-item"
                    key="Other"
                    id="Other"
                    textValue="Other"
                  >
                    {({ isSelected }) => (
                      <div>
                        Other
                        {isSelected && (
                          <span aria-hidden="true">
                            <Checkmark />
                          </span>
                        )}
                      </div>
                    )}
                  </ListBoxItem>
                )}
              </ListBox>
            </Popover>
          </Select>
        )}
      />
      {showOtherInput && (
        <Controller
          name={`${name}_other` as keyof TFormData}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="text"
              className="other-field"
              placeholder="Please specify"
            />
          )}
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
