import QRCode from 'react-qr-code';
import Mascot from '../../Mascot/Mascot';
import './FormStep4.scss';
import { TFormData } from '../../types';

type FormStep4Props = {
  formData: TFormData;
};

export default function FormStep4({ formData }: FormStep4Props) {
  return (
    <div className="form-step4">
      <div className="badge">
        <div className="badge-top">
          <div className="long-hole" />
          <div className="short-hole" />
          <div className="long-hole" />
        </div>
        <div className="badge-center">
          <div className="badge-center-top ">
            <div className="badge-mascot">
              <Mascot />
            </div>
            <div className="badge-code">
              <QRCode width="100%" value={formData.link} />
            </div>
          </div>
          <div className="badge-center-bottom">
            <h3>{formData.name}</h3>
            <p>{formData.pronouns}</p>
          </div>
        </div>
        <div className="badge-bottom" />
      </div>
    </div>
  );
}
