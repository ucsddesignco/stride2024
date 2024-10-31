'use client';

import { Dialog, Heading, Modal } from 'react-aria-components';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import './Register.scss';
import './Modal.scss';
import { CloseIcon } from '../Icons/CloseIcon';
import FormStep1 from './FormSteps/FormStep1/FormStep1';
import { RegistrationSchema, TFormData, ValidFieldNames } from './types';
import RightArrow from '../Icons/RightArrow';
import FormStep2 from './FormSteps/FormStep2/FormStep2';
import FormStep3 from './FormSteps/FormStep3/FormStep3';
import FormStep4 from './FormSteps/FormStep4/FormStep4';

export default function Register() {
  const [isOpen, setOpen] = useState(false);
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
      setNextButtonText('Close');
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
      setOpen(false);
      return;
    }
    setCurrentFormStep(currentFormStep + 1);
  };

  const handleFormPrev = () => {
    if (currentFormStep <= 1) return;
    setCurrentFormStep(currentFormStep - 1);
  };

  return (
    <div className="register-container">
      <button onClick={() => setOpen(true)}>Register</button>
      <Modal isDismissable isOpen={isOpen} onOpenChange={setOpen}>
        <Dialog>
          <form
            onSubmit={handleSubmit(onSubmit, validationError => {
              console.error('Validation errors:', validationError);
            })}
            className="modal-form"
          >
            <div className="form-header">
              <Heading slot="title">Registration</Heading>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                }}
                className="close-icon"
              >
                <CloseIcon aria-label="Close Registration Modal" />
              </button>
            </div>
            <div className="form-body">
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
            </div>

            <div className="form-footer">
              {/* <p>{`${currentFormStep} of 4`}</p> */}
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
            </div>
          </form>
        </Dialog>
      </Modal>
    </div>
  );
}
