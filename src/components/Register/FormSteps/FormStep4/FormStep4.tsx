import './FormStep4.scss';
import Image from 'next/image';
import QRCode from 'react-qr-code';
import MascotCircles from '@/components/MascotCircles/MascotCircles';
import { TFormData } from '../../types';
import VerticalBar from '../../MascotBadge/VerticalBar';
import HorizontalBar from '../../MascotBadge/HorizontalBar';

type FormStep4Props = {
  formData: TFormData;
};

export default function FormStep4({ formData }: FormStep4Props) {
  const firstName = formData.name.split(' ')[0];
  const lastName = formData.name.split(' ')[1];
  const firstPronoun = formData.pronouns.split('/')[0];
  const secondPronoun = formData.pronouns.split('/')[1];

  return (
    <div id="form-step4">
      <div id="form-step4-text">
        <p>Thanks a bunch!</p>
        <p>We've sent the Badge URL</p>
        <p>
          to <span>{formData.email}</span>
        </p>
      </div>
      <div id="mascot-badge-container">
        <div className="mascot-badge">
          <div className="badge-top">
            <div className="long-hole" />
            <Image
              src="images/logos/stride-logo.svg"
              width={100}
              height={20}
              alt="Stride Logo"
            />
            <div className="long-hole" />
          </div>
          <div className="badge-center">
            <div className="badge-center-top ">
              <h2>
                <span>{firstName}</span>
                <span>{lastName}</span>
              </h2>
              <p>
                <VerticalBar id="vertical-dotted-bar" />
                <span>{firstPronoun}/</span>
                <span>{secondPronoun}</span>
              </p>
              <HorizontalBar id="horizontal-dotted-bar" />
            </div>
            <div className="badge-center-center">
              <div className="badge-code">
                <QRCode value={formData?.link || ''} />
              </div>
              <p>Class of {formData.year}</p>
            </div>
          </div>
          <div className="badge-bottom">
            <MascotCircles />
          </div>
        </div>
      </div>
    </div>
  );
}
