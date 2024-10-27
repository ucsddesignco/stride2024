import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { TFormData } from '../../types';
import FormField from '../../FormField/FormField';
import './FormStep2.scss';

type FormStep2Props = {
  register: UseFormRegister<TFormData>;
  errors: FieldErrors<TFormData>;
};

export default function FormStep2({ register, errors }: FormStep2Props) {
  return (
    <div className="form-step2">
      <FormField
        register={register}
        name="email"
        label="UCSD Email"
        placeholder="duck@ucsd.edu"
        error={errors.email}
      />
      <FormField
        register={register}
        name="link"
        label="Linkedin/Portfolio"
        placeholder="linkedin.com/in/duck"
        error={errors.link}
      />
      <FormField
        register={register}
        name="interest"
        type="select"
        defaultValue="Product Designer"
        hasOtherOption
        options={[
          'Product Design',
          'Brand Design',
          'UX Research',
          'Project Management',
          'Software Engineering',
          'UX Engineering'
        ]}
        label="Interest"
        placeholder="Product Designer"
        error={errors.interest}
      />
    </div>
  );
}
