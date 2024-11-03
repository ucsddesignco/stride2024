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
        label="Full Name"
        placeholder="Detective Croc"
        error={errors.name}
      />
      <FormText
        register={register}
        name="pronouns"
        label="Pronouns"
        placeholder="She/Hers"
        error={errors.pronouns}
      />
      <FormSelect
        control={control}
        name="year"
        width="10rem"
        defaultValue="2025"
        options={['2025', '2026', '2027', '2028', '2029']}
        label="Grad Year"
        error={errors.year}
      />
    </div>
  );
}
