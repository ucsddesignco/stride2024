import MascotCircles from '@/components/MascotCircles/MascotCircles';
import QRCode from 'react-qr-code';
import VerticalBar from './VerticalBar';
import HorizontalBar from './HorizontalBar';
import { TFormData } from '../types';
import './MascotBadge.scss';
import StrideLogo from '../StrideLogo';

type ParsedFormData = {
  firstName: string;
  lastName: string;
  firstPronoun: string;
  secondPronoun: string;
  year: string;
};

const DEFAULT_VALUES = {
  name: 'Detective Duck',
  pronouns: 'They/Them',
  year: '???',
  link: '',
  email: ''
};

const parseFormData = (formData: TFormData): ParsedFormData => {
  const name = formData.name || DEFAULT_VALUES.name;
  const pronouns = formData.pronouns || DEFAULT_VALUES.pronouns;
  const [firstName, lastName] = name.split(' ');
  const [firstPronoun, secondPronoun] = pronouns.split('/');

  return {
    firstName,
    lastName,
    firstPronoun,
    secondPronoun,
    year: formData.year || DEFAULT_VALUES.year
  };
};

export default function MascotBadge({ formData }: { formData: TFormData }) {
  const { firstName, lastName, firstPronoun, secondPronoun, year } =
    parseFormData(formData);

  const defaultStyle = (field: keyof TFormData) => {
    const isDefault =
      !Object.keys(formData).includes(field) ||
      formData[field] === undefined ||
      formData[field] === '';
    return isDefault ? { color: 'gray' } : { color: 'white' };
  };

  return (
    <div id="mascot-badge-container">
      <div className="mascot-badge">
        <div className="badge-top">
          <div className="long-hole" />
          <StrideLogo />
          <div className="long-hole" />
        </div>
        <div className="badge-center">
          <div className="badge-center-top ">
            <h2>
              <span style={defaultStyle('name')}>{firstName}</span>
              <span style={defaultStyle('name')}>{lastName}</span>
            </h2>
            <p>
              <VerticalBar id="vertical-dotted-bar" />
              <span style={defaultStyle('pronouns')}>{firstPronoun}/</span>
              <span style={defaultStyle('pronouns')}>{secondPronoun}</span>
            </p>
            <HorizontalBar id="horizontal-dotted-bar" />
          </div>
          <div className="badge-center-center">
            <div className="badge-code">
              {formData?.link === undefined || formData?.link === '' ? (
                <div id="empty-qr-code" />
              ) : (
                <QRCode value={formData?.link || ''} />
              )}
            </div>
            <p>
              Class of <span style={defaultStyle('year')}>{year}</span>
            </p>
          </div>
        </div>
        <div className="badge-bottom">
          <MascotCircles />
        </div>
      </div>
    </div>
  );
}
