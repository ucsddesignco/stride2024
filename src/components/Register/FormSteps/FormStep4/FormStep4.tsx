import './FormStep4.scss';
import Image from 'next/image';
import QRCode from 'react-qr-code';
import MascotCircles from '@/components/MascotCircles/MascotCircles';
import { TFormData } from '../../types';
import VerticalBar from '../../MascotBadge/VerticalBar';
import HorizontalBar from '../../MascotBadge/HorizontalBar';
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
      <MascotBadge formData={formData} />
    </div>
  );
}
