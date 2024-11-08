import { SVGProps } from 'react';

export default function SelectArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="19"
      height="11"
      viewBox="0 0 19 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L9.25411 9.25411L17.5082 1" stroke="white" strokeWidth="2" />
    </svg>
  );
}
