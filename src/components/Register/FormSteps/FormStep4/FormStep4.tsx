import './FormStep4.scss';
import { TFormData } from '../../types';
import MascotBadge from '../../MascotBadge/MascotBadge';

type FormStep4Props = {
  formData: TFormData;
};

export default function FormStep4({ formData }: FormStep4Props) {
  return (
    <div id="form-step4">
      <div id="form-step4-text">
        <p>Thanks a bunch!</p>
        <p>We've sent the Badge URL</p>
        <p>
          to <span>{formData.email}</span>
        </p>
      </div>
      <MascotBadge formData={formData} shouldScale />
    </div>
  );
}
