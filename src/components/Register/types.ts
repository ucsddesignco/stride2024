import { Control, FieldError, UseFormRegister } from 'react-hook-form';
import { z, ZodType } from 'zod';

export type MascotBreeds =
  | 'default'
  | 'yellow'
  | 'lilac'
  | 'blue'
  | 'brown'
  | 'pink';

export type MascotHats =
  | 'bowler'
  | 'beret'
  | 'hawk'
  | 'ivan'
  | 'nerve'
  | 'tophat';

export type MascotAccessories =
  | 'glasses'
  | 'bowtie'
  | 'monocle'
  | 'mustache'
  | 'suit'
  | 'default';

type ColorParts = {
  color: string;
  shadow: string;
};

export type ColorTheme = Record<MascotBreeds, ColorParts>;

export type TFormData = {
  name: string;
  pronouns: string;
  year: string;
  // interest: string;
  // interest_other?: string;
  email: string;
  link: string;
};

export type ValidFieldNames = keyof TFormData;

export type FormTextProps = {
  label: string;
  name: keyof TFormData;
  register: UseFormRegister<TFormData>;
  control?: Control<TFormData, any>;
  error?: FieldError;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
};

type SelectOptions = Array<{ label: string; value: string }>;

export type MascotUserData = {
  color: {
    color: string;
    shadow: string;
  };
  hat: MascotHats;
  accessory: MascotAccessories;
};

export type FormSelectProps = {
  label: string;
  name: keyof TFormData;
  control: Control<TFormData, any>;
  options: SelectOptions;
  defaultValue?: string;
  defaultLabel?: string;
  hasOtherOption?: boolean;
  error?: FieldError;
  width?: string;
};

export const RegistrationSchema: ZodType<TFormData> = z.object({
  name: z
    .string()
    .min(1, { message: 'Please enter your name.' })
    .max(50, { message: 'Your name needs to be under 50 characters' }),
  pronouns: z
    .string()
    .min(2, { message: 'Please enter your preferred pronouns.' })
    .max(50, { message: 'Your pronouns needs to be under 50 characters.' }),
  year: z.string().min(2, { message: 'Please enter your Graduation year' }),
  // interest: z.string().min(2, { message: 'Interest is too short' }),
  // interest_other: z
  //   .string()
  //   .min(2, { message: 'Interest is too short' })
  //   .max(50, { message: 'Interest needs to be under 30 characters.' })
  //   .optional(),
  link: z
    .string()
    .min(1, { message: 'Please enter a valid link.' })
    .max(50, { message: 'Please enter a valid link under 50 characters.' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid UCSD email address.' })
    .includes('ucsd.edu', {
      message: 'Please enter a valid UCSD email address.'
    })
});
