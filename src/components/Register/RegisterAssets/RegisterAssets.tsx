import Image from 'next/image';
import './RegisterAssets.scss';

export default function RegisterAssets({
  simplified = false
}: {
  simplified?: boolean;
}) {
  return (
    <div className={`register-asset-wrapper ${simplified ? 'simplified' : ''}`}>
      <Image
        className="register-asset"
        id="register-asset-top-edge"
        src="/images/register-home-assets/top-edge.svg"
        width="482"
        height="34"
        alt="Paper Texture"
        aria-hidden
      />
      <Image
        className="register-asset"
        id="register-asset-stacked-papers"
        src="/images/register-home-assets/stacked-papers.svg"
        width="153"
        height="473"
        alt="Two overlapping papers"
        aria-hidden
      />
      <Image
        className="register-asset"
        id="register-asset-magnify-glass"
        src="/images/register-home-assets/magnify-glass.svg"
        width="377"
        height="391"
        alt="Magnifying glass"
        aria-hidden
      />
      <Image
        className="register-asset"
        id="register-asset-right-edge"
        src="/images/register-home-assets/right-edge.svg"
        width="28"
        height="331"
        alt="Paper texture on right edge"
        aria-hidden
      />
      <Image
        className="register-asset"
        id="register-asset-hole-papers"
        src="/images/register-home-assets/hole-papers.svg"
        width="185"
        height="543"
        alt="Papers with holes"
        aria-hidden
      />
      <Image
        className="register-asset"
        id="register-asset-polaroid"
        src="/images/register-home-assets/polaroid.svg"
        width="232"
        height="259"
        alt="Polarid"
        aria-hidden
      />
      <Image
        className="register-asset"
        id="register-asset-bottom-left-edge"
        src="/images/register-home-assets/bottom-left-edge.svg"
        width="260"
        height="148"
        alt="Paper texture"
        aria-hidden
      />
      <Image
        className="register-asset"
        id="register-asset-bottom-left-paper"
        src="/images/register-home-assets/bottom-left-paper.svg"
        width="382"
        height="348"
        alt="Paper texture"
        aria-hidden
      />
      <Image
        className="register-asset"
        id="register-asset-bottom-papers"
        src="/images/register-home-assets/bottom-papers.svg"
        width="778"
        height="303"
        alt="Papers at the bottom"
        aria-hidden
      />
      <Image
        className="register-asset"
        id="register-asset-feather"
        src="/images/register-home-assets/feather.svg"
        width="352"
        height="147"
        alt="Papers at the bottom"
        aria-hidden
      />
    </div>
  );
}
