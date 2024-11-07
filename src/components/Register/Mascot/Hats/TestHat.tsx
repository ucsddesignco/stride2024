import { MouseEventHandler } from 'react';

type TestHatProps = {
  onClick?: MouseEventHandler<SVGSVGElement>;
  mask?: boolean;
  id: string;
};

function InnerSVG() {
  return (
    <>
      <path
        d="M283.325 107.733C275.718 100.073 263.28 99.9973 255.618 107.603C244.926 118.263 233.981 127.294 223.042 134.741C230.524 121.66 234.777 106.577 234.869 90.4716C235.081 40.6634 194.781 0.128037 144.975 0.000808026C95.1557 -0.207846 54.6087 40.0862 54.478 89.8818C54.3985 106.069 58.6666 121.25 66.0343 134.366C46.4985 121.299 34.7134 108.199 34.4061 107.83C27.3059 99.6742 14.9178 98.8405 6.75996 105.94C-1.39792 113.039 -2.31411 125.437 4.78603 133.593C7.01895 136.165 60.6332 196.984 139.728 199.914C141.57 199.963 143.331 200.024 145.161 199.991C193.476 200.182 239.904 178.487 283.206 135.516C290.868 127.91 290.945 115.475 283.338 107.815L283.325 107.733Z"
        fill="#565656"
      />
      <path
        d="M52.609 172.488C75.3032 186.231 105.069 198.63 139.728 199.914C139.975 199.921 140.22 199.928 140.465 199.934C142.043 199.977 143.576 200.019 145.16 199.991C193.475 200.182 239.904 178.487 283.205 135.516C290.868 127.91 290.944 115.475 283.337 107.815L283.324 107.733C275.717 100.073 263.28 99.9973 255.617 107.603C244.925 118.263 233.981 127.294 223.041 134.741C230.523 121.66 234.776 106.577 234.868 90.4716C235.081 40.6634 194.781 0.128037 144.974 0.000807572C138.746 -0.0252798 132.662 0.581743 126.784 1.76129C129.228 8.98554 133.597 16.3203 137.742 23.2804C140.521 27.9452 143.199 32.4417 145.131 36.6239C155.011 58.0201 161.13 83.5001 161.65 107.173C161.962 121.354 158.313 135.995 147.134 145.511C137.847 153.417 126.19 153.535 114.623 153.652C109.88 153.7 105.153 153.748 100.61 154.333C99.715 154.448 98.8162 154.561 97.9146 154.675C87.6963 155.961 77.116 157.294 67.8793 161.991C62.6174 164.666 57.2515 168.256 52.609 172.488Z"
        fill="#434343"
      />
    </>
  );
}

export default function TestHat({ onClick, mask = false, id }: TestHatProps) {
  if (mask) return <InnerSVG />;
  return (
    <svg
      id={id}
      onClick={onClick}
      width="30%"
      viewBox="0 0 289 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <InnerSVG />
    </svg>
  );
}
