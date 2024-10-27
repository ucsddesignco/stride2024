import { MouseEventHandler } from 'react';

type TestHatProps = {
  onClick?: MouseEventHandler<SVGSVGElement>;
  mask?: boolean;
};

function MaskElement() {
  return (
    <>
      <mask id="path-1-inside-1_4237_148" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M41.6707 20.7327C42.1447 19.237 42.4 17.6476 42.4 16C42.4 7.16344 35.0575 0 26 0C16.9425 0 9.6 7.16344 9.6 16C9.6 17.6337 9.85099 19.2103 10.3174 20.695C9.32696 20.5033 8.39667 20.3139 7.53353 20.1383C3.15103 19.2463 0.5 18.7068 0.5 19.9999C0.5 22.6436 11.5791 31.9482 25.881 31.9996C25.9207 31.9999 25.9603 32 26 32C26.0387 32 26.0774 31.9999 26.116 31.9996C40.422 31.9495 52 22.644 52 20.0001C52 18.6979 49.191 19.2541 44.6305 20.1572C43.712 20.3391 42.7226 20.535 41.6707 20.7327Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.6707 20.7327C42.1447 19.237 42.4 17.6476 42.4 16C42.4 7.16344 35.0575 0 26 0C16.9425 0 9.6 7.16344 9.6 16C9.6 17.6337 9.85099 19.2103 10.3174 20.695C9.32696 20.5033 8.39667 20.3139 7.53353 20.1383C3.15103 19.2463 0.5 18.7068 0.5 19.9999C0.5 22.6436 11.5791 31.9482 25.881 31.9996C25.9207 31.9999 25.9603 32 26 32C26.0387 32 26.0774 31.9999 26.116 31.9996C40.422 31.9495 52 22.644 52 20.0001C52 18.6979 49.191 19.2541 44.6305 20.1572C43.712 20.3391 42.7226 20.535 41.6707 20.7327Z"
        fill="black"
      />
      <path
        d="M41.6707 20.7327L39.7642 20.1284L38.754 23.3158L42.0401 22.6983L41.6707 20.7327ZM10.3174 20.695L9.93735 22.6585L13.2309 23.296L12.2255 20.0956L10.3174 20.695ZM7.53353 20.1383L7.93241 18.1784L7.9324 18.1784L7.53353 20.1383ZM25.881 31.9996L25.8949 29.9996L25.8882 29.9996L25.881 31.9996ZM26.116 31.9996L26.109 29.9996L26.1025 29.9997L26.116 31.9996ZM44.6305 20.1572L44.242 18.1953L44.242 18.1953L44.6305 20.1572ZM40.4 16C40.4 17.4398 40.1771 18.8255 39.7642 20.1284L43.5772 21.3369C44.1124 19.6485 44.4 17.8554 44.4 16H40.4ZM26 2C33.9997 2 40.4 8.31428 40.4 16H44.4C44.4 6.01261 36.1152 -2 26 -2V2ZM11.6 16C11.6 8.31428 18.0003 2 26 2V-2C15.8848 -2 7.6 6.01261 7.6 16H11.6ZM12.2255 20.0956C11.8192 18.8023 11.6 17.4277 11.6 16H7.6C7.6 17.8398 7.88281 19.6184 8.40933 21.2944L12.2255 20.0956ZM7.13466 22.0981C7.99683 22.2736 8.93613 22.4647 9.93735 22.6585L10.6974 18.7314C9.71779 18.5418 8.7965 18.3543 7.93241 18.1784L7.13466 22.0981ZM2.5 19.9999C2.5 20.1968 2.44222 20.5072 2.21818 20.8037C2.00772 21.0823 1.76792 21.1925 1.67692 21.2262C1.57064 21.2656 1.6752 21.2057 2.23368 21.2448C3.28024 21.3181 4.87981 21.6392 7.13466 22.0981L7.9324 18.1784C5.80475 17.7454 3.88756 17.3508 2.51298 17.2546C1.86088 17.2089 1.02878 17.2009 0.288479 17.4749C-0.119528 17.6259 -0.600679 17.8993 -0.973237 18.3923C-1.35937 18.9034 -1.5 19.4798 -1.5 19.9999H2.5ZM25.8882 29.9996C19.1603 29.9754 13.1574 27.7699 8.8363 25.245C6.67649 23.983 4.98352 22.6681 3.85902 21.559C3.29393 21.0017 2.90863 20.5318 2.67939 20.1802C2.40556 19.7602 2.5 19.7328 2.5 19.9999H-1.5C-1.5 20.928 -1.05934 21.7697 -0.671411 22.3647C-0.238893 23.0282 0.353094 23.7194 1.05014 24.4069C2.4499 25.7875 4.42058 27.2977 6.81829 28.6987C11.6122 31.4998 18.2999 33.9724 25.8738 33.9996L25.8882 29.9996ZM26 30C25.9649 30 25.9299 29.9999 25.8949 29.9996L25.8672 33.9995C25.9114 33.9998 25.9557 34 26 34V30ZM26.1025 29.9997C26.0684 29.9999 26.0342 30 26 30V34C26.0432 34 26.0863 33.9999 26.1295 33.9996L26.1025 29.9997ZM50 20.0001C50 19.7081 50.1092 19.7232 49.8198 20.1495C49.5804 20.5022 49.178 20.9741 48.5891 21.5342C47.4176 22.6484 45.6603 23.9679 43.4341 25.234C38.9781 27.7681 32.843 29.976 26.109 29.9996L26.123 33.9996C33.695 33.9731 40.5019 31.5032 45.4115 28.711C47.868 27.314 49.8993 25.8083 51.3458 24.4326C52.0658 23.7477 52.6797 23.0584 53.1294 22.396C53.529 21.8072 54 20.9532 54 20.0001H50ZM45.019 22.1191C47.3597 21.6556 49.0501 21.3249 50.1652 21.2468C50.7576 21.2053 50.9036 21.262 50.8303 21.2364C50.7602 21.2119 50.5228 21.1143 50.3058 20.8417C50.0685 20.5437 50 20.2192 50 20.0001H54C54 19.4556 53.8437 18.8635 53.435 18.3502C53.0465 17.8623 52.5541 17.6015 52.1493 17.4602C51.4069 17.2008 50.5655 17.2089 49.8856 17.2566C48.4561 17.3568 46.4617 17.7558 44.242 18.1953L45.019 22.1191ZM42.0401 22.6983C43.1029 22.4986 44.1015 22.3008 45.019 22.1191L44.242 18.1953C43.3225 18.3774 42.3423 18.5715 41.3014 18.7671L42.0401 22.6983Z"
        fill="white"
        mask="url(#path-1-inside-1_4237_148)"
      />
    </>
  );
}

export default function TestHat({ onClick, mask = false }: TestHatProps) {
  if (mask) return <MaskElement />;
  return (
    <svg
      width="52"
      height="32"
      viewBox="0 0 52 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <MaskElement />
    </svg>
  );
}
