import { Control, FieldErrors, UseFormRegister } from 'react-hook-form';
import { TFormData } from '../../types';
import FormText from '../../FormComponents/FormText/FormText';
import './FormStep2.scss';
import FormSelect from '../../FormComponents/FormSelect/FormSelect';

type FormStep2Props = {
  register: UseFormRegister<TFormData>;
  errors: FieldErrors<TFormData>;
  control: Control<TFormData, any>;
};

export default function FormStep2({
  register,
  control,
  errors
}: FormStep2Props) {
  return (
    <div className="form-step2">
      <FormText
        register={register}
        name="email"
        label="UCSD Email"
        placeholder="duck@ucsd.edu"
        error={errors.email}
      />
      <FormText
        register={register}
        name="link"
        label="Linkedin/Portfolio"
        placeholder="linkedin.com/in/duck"
        error={errors.link}
      />
      <FormSelect
        control={control}
        name="interest"
        width="18rem"
        hasOtherOption
        defaultValue="Product Design"
        options={[
          'Product Design',
          'Brand Design',
          'UX Research',
          'Project Management',
          'Software Engineering',
          'UX Engineering'
        ]}
        label="Interest"
        error={errors.interest}
      />
    </div>
  );
}
