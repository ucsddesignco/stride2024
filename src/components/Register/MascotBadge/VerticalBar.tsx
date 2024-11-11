import { SVGProps } from 'react';

export default function VerticalBar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      height="100%"
      width={3}
      viewBox="0 0 3 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 0L1.5 80"
        stroke="#FBFEFC"
        strokeWidth="2"
        strokeDasharray="8 8"
      />
    </svg>
  );
}
