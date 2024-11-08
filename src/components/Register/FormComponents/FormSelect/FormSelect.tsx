import { useId, useState } from 'react';
import * as Select from '@radix-ui/react-select';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { Controller } from 'react-hook-form';
import './FormSelect.scss';
import SelectArrow from '@/components/Icons/SelectArrow';
import Checkmark from '@/components/Icons/Checkmark';
import { FormSelectProps, TFormData } from '../../types';

export default function FormSelect({
  label,
  name,
  control,
  options = [],
  defaultValue,
  defaultLabel,
  hasOtherOption = false,
  width = 'auto',
  error
}: FormSelectProps) {
  const inputId = useId();
  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleSelectChange = (value: string) => {
    if (value === 'Other') {
      setShowOtherInput(true);
    } else {
      setShowOtherInput(false);
    }
  };

  return (
    <div className="registration-textfield-container registration-select-container">
      <label htmlFor={inputId}>{label}</label>

      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <Select.Root
            value={value}
            onValueChange={newValue => {
              onChange(newValue);
              handleSelectChange(newValue);
            }}
          >
            <Select.Trigger
              id={inputId}
              className="register-select"
              style={{ width }}
            >
              <Select.Value placeholder={defaultLabel} />
              <Select.Icon>
                <SelectArrow />
              </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
              <Select.Content
                className="select-content"
                style={{ width }}
                position="popper"
                side="bottom"
              >
                <ScrollArea.Root className="ScrollAreaRoot">
                  <Select.Viewport className="select-viewport">
                    {options.map(option => (
                      <Select.Item
                        key={option.label}
                        value={option.value}
                        className="register-list-box-item"
                      >
                        <Select.ItemText>{option.label}</Select.ItemText>
                        <Select.ItemIndicator>
                          <Checkmark />
                        </Select.ItemIndicator>
                      </Select.Item>
                    ))}

                    {hasOtherOption && (
                      <Select.Item
                        value="Other"
                        className="register-list-box-item"
                      >
                        <Select.ItemText>Other</Select.ItemText>
                        <Select.ItemIndicator>
                          <Checkmark aria-hidden />
                        </Select.ItemIndicator>
                      </Select.Item>
                    )}
                  </Select.Viewport>
                </ScrollArea.Root>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
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
