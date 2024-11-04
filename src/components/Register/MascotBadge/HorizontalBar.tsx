import { SVGProps } from 'react';

export default function HorizontalBar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="100%"
      height="2"
      viewBox="0 0 181 2"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.151855 1.26562L180.248 1.26562"
        stroke="#FBFEFC"
        stroke-width="1.072"
        stroke-dasharray="2.14 2.14"
      />
    </svg>
  );
}
