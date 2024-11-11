import { SVGProps } from 'react';

export default function HorizontalBar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width={336}
      height={2}
      viewBox="0 0 336 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 1L336 0.999985"
        stroke="white"
        strokeWidth="3"
        strokeDasharray="8 8"
      />
    </svg>
  );
}
