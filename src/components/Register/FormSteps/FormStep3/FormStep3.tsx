import Mascot from '@/components/Register/Mascot/Mascot';
import './FormStep3.scss';
import { useState } from 'react';
import BlockIcon from '@/components/Icons/BlockIcon';
import { COLOR_THEMES } from '../../constants';
import { MascotBreeds, MascotHats } from '../../types';
import FolderTabs from '../../FolderTabs/FolderTabs';
import TestHat from '../../Mascot/Hats/TestHat';

export default function FormStep3() {
  const onColorChange = (breed: MascotBreeds) => {
    localStorage.setItem('mascot-color', breed);
    window.dispatchEvent(new CustomEvent('mascot-color'));
  };

  const onHatChange = (hat: MascotHats) => {
    localStorage.setItem('mascot-hat', hat);
    window.dispatchEvent(new CustomEvent('mascot-hat'));
  };

  const [activeTab, setActiveTab] = useState('Color');

  return (
    <div className="form-step3">
      <div className="form-step3-mascot">
        <Mascot />
      </div>
      <div className="customization-container">
        <FolderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="customization-box">
          {activeTab === 'Color' && (
            <ul className="color-palette-container">
              {Object.entries(COLOR_THEMES).map(([breed, colors]) => (
                <li key={`duck-type-${breed}`}>
                  <button
                    className="color-grouping"
                    onClick={() => onColorChange(breed as MascotBreeds)}
                    aria-label={`${breed} color scheme`}
                  >
                    <ul>
                      <li style={{ backgroundColor: colors.head }} />
                      <li style={{ backgroundColor: colors.arm }} />
                      <li style={{ backgroundColor: colors.body }} />
                    </ul>
                  </button>
                </li>
              ))}
            </ul>
          )}

          {activeTab === 'Hat' && (
            <div className="hat-container">
              <BlockIcon
                onClick={() => {
                  onHatChange('');
                }}
              />
              <TestHat
                onClick={() => {
                  onHatChange('test');
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
