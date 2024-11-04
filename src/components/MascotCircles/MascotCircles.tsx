import Mascot from '../Register/Mascot/Mascot';
import './MascotCircles.scss';

export default function MascotCircles() {
  return (
    <div className="mascot-circles-container">
      <Mascot />
      <div className="half-badge-circle outer" />
      <div className="half-badge-circle middle" />
      <div className="half-badge-circle inner" />
    </div>
  );
}
