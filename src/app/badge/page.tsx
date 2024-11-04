'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import './Badge.scss';
import FormStep1 from '@/components/Register/FormSteps/FormStep1/FormStep1';
import {
  RegistrationSchema,
  TFormData,
  ValidFieldNames
} from '@/components/Register/types';
import RightArrow from '@/components/Icons/RightArrow';
import FormStep2 from '@/components/Register/FormSteps/FormStep2/FormStep2';
import FormStep3 from '@/components/Register/FormSteps/FormStep3/FormStep3';
import FormStep4 from '@/components/Register/FormSteps/FormStep4/FormStep4';
import Link from 'next/link';
import RegisterAssets from '@/components/Register/RegisterAssets/RegisterAssets';
import MascotBadge from '@/components/Register/MascotBadge/MascotBadge';

export default function Register() {
  const [nextButtonText, setNextButtonText] = useState('Next');
  const [currentFormStep, setCurrentFormStep] = useState(1);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    trigger,
    getValues
  } = useForm<TFormData>({
    resolver: zodResolver(RegistrationSchema)
  });

  useEffect(() => {
    if (currentFormStep === 4) {
      setNextButtonText('Home');
    } else if (currentFormStep === 3) {
      setNextButtonText('Finish');
    } else {
      setNextButtonText('Next');
    }
  }, [currentFormStep]);

  const onSubmit = async (data: TFormData) => {
    try {
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleFormNext = async () => {
    // Input Validation for Steps 1 and 2
    if (currentFormStep <= 2) {
      let fieldsToValidate: Array<ValidFieldNames> = [
        'name',
        'pronouns',
        'year'
      ];
      if (currentFormStep === 2) {
        fieldsToValidate = ['email', 'link'];
      }

      const isValid = await trigger(fieldsToValidate);
      if (!isValid) return;
    }

    if (currentFormStep === 3) {
      handleSubmit(onSubmit)();
    }

    if (currentFormStep >= 4) {
      // setOpen(false);
      return;
    }
    setCurrentFormStep(currentFormStep + 1);
  };

  const handleFormPrev = () => {
    if (currentFormStep <= 1) return;
    setCurrentFormStep(currentFormStep - 1);
  };

  return (
    <main id="badge-page-container">
      <div id="badge-page-left-content">
        <RegisterAssets simplified />
        <div id="badge-page-main-content">
          <h1>
            {currentFormStep === 4 ? 'Badge Complete!' : 'Create Your Badge'}
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit, validationError => {
              console.error('Validation errors:', validationError);
            })}
            className="modal-form"
          >
            <div id="badge-form-body">
              {currentFormStep === 1 && (
                <FormStep1
                  register={register}
                  control={control}
                  errors={errors}
                />
              )}
              {currentFormStep === 2 && (
                <FormStep2
                  register={register}
                  control={control}
                  errors={errors}
                />
              )}
              {currentFormStep === 3 && <FormStep3 />}
              {currentFormStep === 4 && <FormStep4 formData={getValues()} />}
              {/* <FormStep4 formData={getValues()}/> */}
            </div>
          </form>
        </div>
        <div id="badge-footer">
          {currentFormStep === 1 && (
            <Link href="/register" style={{ textDecoration: 'none' }}>
              <button
                type="button"
                className="back-button"
                onClick={handleFormPrev}
              >
                <span className="right-arrow">
                  <RightArrow fill="white" />
                </span>{' '}
                Back
              </button>
            </Link>
          )}
          {currentFormStep > 1 && (
            <button
              type="button"
              className="back-button"
              onClick={handleFormPrev}
            >
              <span className="right-arrow">
                <RightArrow fill="white" />
              </span>{' '}
              Back
            </button>
          )}
          <p id="current-step-large">Step {currentFormStep} of 4</p>
          <p id="current-step-small">{currentFormStep}/4</p>
          {currentFormStep < 4 && (
            <button
              type="button"
              className="next-button"
              onClick={handleFormNext}
            >
              {nextButtonText}{' '}
              {currentFormStep < 4 && (
                <span>
                  <RightArrow />
                </span>
              )}
            </button>
          )}
          {currentFormStep === 4 && (
            <Link href="/" style={{ textDecoration: 'none' }}>
              <button type="button" className="next-button">
                Home
              </button>
            </Link>
          )}
        </div>
      </div>
      <div id="badge-page-right-content">
        <MascotBadge formData={getValues()} />
      </div>
    </main>
  );
}
