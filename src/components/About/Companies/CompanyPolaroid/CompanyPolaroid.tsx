import Image from 'next/image';
import { Company } from '../constants';

export default function CompanyPolaroid({
  companyData
}: {
  companyData: Company;
}) {
  return (
    <svg
      id="company-logo-polaroid"
      width="220"
      viewBox="0 0 220 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.6477 1.22926L53.4189 4.6258L69.8046 6.32407L77.9974 7.1732L82.5868 9.79541L86.1902 8.02233L151.981 12.9433L218.728 16.7076L209.54 99.5589L208.647 121.238L208.201 132.078L205.092 133.589L207.977 137.498L207.754 142.918L199.852 254.8L183.865 253.824L177.86 249.509L175.872 253.336L167.878 252.847L135.905 250.894L32.7063 240.165L1.94587 239.11L3.11811 219.665L3.70424 209.943L8.71541 205.793L4.29036 200.22L6.63484 161.33L18.0903 46.8954L20.6477 1.22926Z"
        fill="black"
        stroke="#FBFEFC"
        stroke-width="2"
      />
      <rect
        x="31.5293"
        y="12.9287"
        width="175.308"
        height="184.947"
        transform="rotate(4.53287 31.5293 12.9287)"
        fill="black"
      />
      <rect
        x="31.5293"
        y="12.9287"
        width="175.308"
        height="184.947"
        transform="rotate(4.53287 31.5293 12.9287)"
        stroke="#FBFEFC"
        stroke-width="2"
      />
      <foreignObject x="22" y="20" width="170" height="190" id="">
        <Image
          src={companyData.companyImage}
          alt={`${companyData.name} Logo`}
          width={170}
          height={190}
        />
      </foreignObject>
    </svg>
  );
}
