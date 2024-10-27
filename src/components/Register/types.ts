import { FieldError, UseFormRegister } from 'react-hook-form';
import { z, ZodType } from 'zod';

export type MascotBreeds = 'default' | 'mallard';

type ColorParts = {
  head: string;
  arm: string;
  body: string;
};

export type ColorTheme = Record<MascotBreeds, ColorParts>;

export type MascotHats = '' | 'test';

export type TFormData = {
  name: string;
  pronouns: string;
  year: string;
  interest: string;
  interest_other?: string;
  email: string;
  link: string;
};

export type ValidFieldNames = keyof TFormData;

export type FormFieldProps = {
  label: string;
  name: keyof TFormData;
  register: UseFormRegister<TFormData>;
  error?: FieldError;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
} & (
  | {
      type?: 'text' | 'email' | 'password' | 'number';
      options?: never;
      defaultValue?: string;
      hasOtherOption?: never;
      watch?: never;
      setValue?: never;
    }
  | {
      type: 'select';
      options: Array<string>;
      defaultValue: string;
      hasOtherOption?: false;
    }
  | {
      type: 'select';
      options: Array<string>;
      defaultValue: string;
      hasOtherOption: true;
    }
);

export const RegistrationSchema: ZodType<TFormData> = z.object({
  name: z
    .string()
    .min(2, { message: 'Name is too short' })
    .max(50, { message: 'Name needs to be under 70 characters' }),
  pronouns: z
    .string()
    .min(2, { message: 'Pronouns is too short' })
    .max(50, { message: 'Pronouns needs to be under 50 characters.' }),
  year: z
    .string()
    .length(4, { message: 'Year must be valid' })
    .refine(
      year => {
        const yearNumber = parseInt(year, 10);
        return yearNumber >= 2022 && yearNumber <= 2029;
      },
      { message: 'Year must be between 2022 and 2029' }
    ),
  interest: z.string().min(2, { message: 'Interest is too short' }),
  interest_other: z
    .string()
    .min(2, { message: 'Interest is too short' })
    .max(50, { message: 'Interest needs to be under 30 characters.' })
    .optional(),
  link: z
    .string()
    .includes('linkedin.com', { message: 'Invalid LinkedIn URL' }),
  email: z
    .string()
    .email({ message: 'Invalid UCSD email' })
    .includes('ucsd.edu', { message: 'Invalid UCSD email' })
});
