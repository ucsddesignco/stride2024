import { SVGProps } from 'react';

export default function VerticalBar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="2"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 2 38"
      fill="none"
    >
      <path
        d="M1.46387 0.882812V37.8668"
        stroke="#FBFEFC"
        strokeWidth="1.072"
        strokeDasharray="2.14 2.14"
      />
    </svg>
  );
}
