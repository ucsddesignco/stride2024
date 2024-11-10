import { SVGProps } from 'react';

export default function InfoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon-info" clipPath="url(#clip0_5454_30)">
        <path
          id="Vector"
          d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          id="Vector (Stroke)"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.9399 6.08691C10.9399 5.39656 11.4996 4.83691 12.1899 4.83691H12.2015C12.8919 4.83691 13.4515 5.39656 13.4515 6.08691C13.4515 6.77727 12.8919 7.33691 12.2015 7.33691H12.1899C11.4996 7.33691 10.9399 6.77727 10.9399 6.08691Z"
          fill="currentColor"
        />
        <path
          id="Vector_2"
          d="M9.8252 10.8171H12.1902V13.7734V16.7297M12.1902 16.7297H9.8252M12.1902 16.7297H14.5552"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5454_30">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="matrix(-1 0 0 1 24 0)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
