import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { TFormData } from '../../types';
import FormField from '../../FormField/FormField';
import './FormStep1.scss';

type FormStep1Props = {
  register: UseFormRegister<TFormData>;
  errors: FieldErrors<TFormData>;
};

export default function FormStep1({ register, errors }: FormStep1Props) {
  return (
    <div className="form-step1">
      <FormField
        register={register}
        name="name"
        label="Full Name"
        placeholder="Detective Croc"
        error={errors.name}
      />
      <FormField
        register={register}
        name="pronouns"
        label="Pronouns"
        placeholder="She/Hers"
        error={errors.pronouns}
      />
      <FormField
        register={register}
        name="year"
        type="select"
        defaultValue="2024"
        options={[
          '2022',
          '2023',
          '2024',
          '2025',
          '2026',
          '2027',
          '2028',
          '2029'
        ]}
        label="Grad Year"
        error={errors.year}
      />
    </div>
  );
}
