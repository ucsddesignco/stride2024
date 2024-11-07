import './FormStep3.scss';
import { useState } from 'react';
import MascotCircles from '@/components/MascotCircles/MascotCircles';
import Image from 'next/image';
import { COLOR_THEMES } from '../../constants';
import { MascotBreeds, MascotHats } from '../../types';
import FolderTabs from '../../FolderTabs/FolderTabs';
import { mascotHats } from '../../MascotHats/constants';

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
      <div id="half-badge">
        <MascotCircles />
      </div>
      <div className="customization-container">
        <FolderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="customization-box">
          {activeTab === 'Color' && (
            <ul className="color-palette-container">
              {Object.entries(COLOR_THEMES).map(([breed, colors]) => (
                <li key={`duck-type-${breed}`}>
                  <button
                    type="button"
                    className="color-grouping"
                    onClick={() => onColorChange(breed as MascotBreeds)}
                    aria-label={`${breed} color scheme`}
                  >
                    <div
                      style={{
                        border: `4px solid ${colors.shadow}`,
                        backgroundColor: colors.color
                      }}
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}

          {activeTab === 'Hat' && (
            <ul className="hat-container">
              {Object.entries(mascotHats).map(([hatName, hatData]) => (
                <li key={hatName}>
                  <button
                    type="button"
                    onClick={() => onHatChange(hatName as MascotHats)}
                    aria-label={`${hatName} hat`}
                  >
                    {/* {component} */}
                    <Image
                      src={hatData.iconSrc}
                      alt={`${hatName} icon`}
                      width={100}
                      height={100}
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
