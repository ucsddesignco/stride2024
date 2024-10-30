import { SVGProps } from 'react';

export default function Checkmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1L5.69417 10.8091C5.32071 11.39 4.48478 11.4265 4.06213 10.8803L1 6.92308"
        stroke="#68DEA3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
