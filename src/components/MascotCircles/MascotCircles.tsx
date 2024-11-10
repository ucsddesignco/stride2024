import Mascot from '../Register/Mascot/Mascot';
import { MascotUserData } from '../Register/types';
import './MascotCircles.scss';

export default function MascotCircles({
  mascotData
}: {
  mascotData?: MascotUserData;
}) {
  return (
    <div className="mascot-circles-container">
      <Mascot mascotData={mascotData} />
      <div className="half-badge-circle outer" />
      <div className="half-badge-circle middle" />
      <div className="half-badge-circle inner" />
    </div>
  );
}
