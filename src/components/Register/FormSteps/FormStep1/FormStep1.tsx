import { Control, FieldErrors, UseFormRegister } from 'react-hook-form';
import { TFormData } from '../../types';
import FormText from '../../FormComponents/FormText/FormText';
import './FormStep1.scss';
import FormSelect from '../../FormComponents/FormSelect/FormSelect';

type FormStep1Props = {
  register: UseFormRegister<TFormData>;
  errors: FieldErrors<TFormData>;
  control: Control<TFormData, any>;
};

export default function FormStep1({
  register,
  errors,
  control
}: FormStep1Props) {
  return (
    <div className="form-step1">
      <FormText
        register={register}
        name="name"
        label="Name"
        placeholder="e.g. Detective Duck"
        error={errors.name}
      />
      <FormText
        register={register}
        name="pronouns"
        label="Pronouns"
        placeholder="e.g. they/them"
        error={errors.pronouns}
      />
      <FormSelect
        control={control}
        name="year"
        width="14rem"
        defaultLabel="Grad Year"
        options={[
          { label: 'Class of 2025', value: '2025' },
          { label: 'Class of 2026', value: '2026' },
          { label: 'Class of 2027', value: '2027' },
          { label: 'Class of 2028', value: '2028' },
          { label: 'NA', value: 'NA' }
        ]}
        label="Graduation Year"
        error={errors.year}
      />
    </div>
  );
}
