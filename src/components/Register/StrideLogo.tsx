import { SVGProps } from 'react';

export default function StrideLogo({
  width,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width={width || '100%'}
      viewBox="0 0 209 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.7978 48.064C12.6031 48.064 11.4298 47.9787 10.2778 47.808C9.12578 47.68 8.01645 47.424 6.94978 47.04C5.88311 46.6133 4.88044 46.08 3.94178 45.44C3.04578 44.7573 2.29911 43.9253 1.70178 42.944C1.14711 41.9627 0.784444 40.896 0.613778 39.744C0.443111 38.592 0.464444 37.4187 0.677778 36.224L0.805778 35.584H7.65378L7.58978 35.904C7.41911 36.8427 7.46178 37.76 7.71778 38.656C8.01644 39.5093 8.50711 40.2133 9.18978 40.768C9.87245 41.28 10.6618 41.6427 11.5578 41.856C12.4538 42.0693 13.3711 42.176 14.3098 42.176C15.2484 42.176 16.1658 42.0693 17.0618 41.856C18.0004 41.6427 18.8751 41.28 19.6858 40.768C20.4964 40.2133 21.1578 39.5093 21.6698 38.656C22.2244 37.8027 22.5871 36.928 22.7578 36.032C22.9284 34.88 22.8218 33.7707 22.4378 32.704C22.0538 31.6373 21.4778 30.72 20.7098 29.952C19.9418 29.184 19.0671 28.5653 18.0858 28.096C17.1044 27.584 16.1231 27.0933 15.1418 26.624C14.2031 26.1547 13.2644 25.6427 12.3258 25.088C11.3871 24.4907 10.5338 23.8293 9.76578 23.104C8.99778 22.336 8.29378 21.504 7.65378 20.608C7.05645 19.712 6.56578 18.7733 6.18178 17.792C5.79778 16.768 5.54178 15.68 5.41378 14.528C5.28578 13.376 5.30711 12.224 5.47778 11.072C5.64844 10.0053 5.96844 8.93867 6.43778 7.872C6.90711 6.80533 7.52578 5.824 8.29378 4.928C9.06178 4.032 9.93645 3.264 10.9178 2.624C11.9418 1.94133 12.9871 1.408 14.0538 1.024C15.1631 0.639998 16.2511 0.383999 17.3178 0.256001C18.4271 0.0853335 19.5364 0 20.6458 0C21.8404 0 23.0138 0.0853335 24.1658 0.256001C25.3178 0.383999 26.3844 0.661332 27.3658 1.088C28.3898 1.472 29.3284 2.02667 30.1818 2.752C31.0778 3.43467 31.7818 4.26667 32.2938 5.248C32.8058 6.18667 33.1471 7.232 33.3178 8.384C33.4884 9.536 33.4671 10.688 33.2538 11.84L33.1258 12.48H26.2778L26.3418 12.16C26.5124 11.2213 26.4698 10.3467 26.2138 9.536C26.0004 8.68267 25.5738 7.97867 24.9338 7.424C24.3364 6.82667 23.6111 6.42133 22.7578 6.208C21.9044 5.99467 21.0298 5.888 20.1338 5.888C19.2378 5.888 18.3418 6.016 17.4458 6.272C16.5924 6.48533 15.7818 6.86933 15.0138 7.424C14.2458 7.97867 13.6271 8.66133 13.1578 9.472C12.6884 10.2827 12.3898 11.136 12.2618 12.032C12.0484 13.184 12.1338 14.2933 12.5178 15.36C12.9018 16.4267 13.4564 17.344 14.1818 18.112C14.9498 18.8373 15.8244 19.456 16.8058 19.968C17.7871 20.4373 18.7684 20.928 19.7498 21.44C20.7311 21.9093 21.6911 22.4427 22.6298 23.04C23.5684 23.5947 24.4218 24.256 25.1898 25.024C25.9578 25.7493 26.6404 26.56 27.2378 27.456C27.8778 28.3093 28.3898 29.248 28.7738 30.272C29.1578 31.296 29.4138 32.384 29.5418 33.536C29.7124 34.6453 29.6911 35.776 29.4778 36.928C29.3071 38.08 28.9658 39.1893 28.4538 40.256C27.9418 41.3227 27.2804 42.304 26.4698 43.2C25.6591 44.096 24.7418 44.8853 23.7178 45.568C22.6938 46.208 21.6271 46.72 20.5178 47.104C19.4511 47.4453 18.3418 47.68 17.1898 47.808C16.0378 47.9787 14.9071 48.064 13.7978 48.064Z"
        fill="#FBFEFC"
      />
      <path
        d="M49.8688 48.064C48.6314 48.064 47.4368 47.9147 46.2848 47.616C45.1328 47.3173 44.0874 46.8267 43.1488 46.144C42.2528 45.4613 41.5061 44.608 40.9088 43.584C40.3541 42.56 39.9488 41.472 39.6928 40.32C39.4794 39.1253 39.3941 37.9307 39.4368 36.736C39.4794 35.4987 39.6074 34.2613 39.8208 33.024L41.9968 20.16H35.8528V14.272H42.9568L45.1968 0.512001H52.0448L49.8048 14.272H61.5808V20.16H48.8448L46.5408 33.984C46.4128 34.5813 46.3274 35.1787 46.2848 35.776C46.2848 36.3733 46.3061 36.9707 46.3488 37.568C46.3914 38.1653 46.4981 38.7413 46.6688 39.296C46.8394 39.8507 47.0741 40.3627 47.3728 40.832C47.7141 41.2587 48.1621 41.6 48.7168 41.856C49.2714 42.0693 49.8474 42.176 50.4448 42.176C50.9568 42.176 51.4688 42.0693 51.9808 41.856C52.5354 41.6427 53.0261 41.344 53.4528 40.96C53.8795 40.576 54.2634 40.1493 54.6048 39.68C54.9461 39.168 55.2448 38.656 55.5008 38.144C55.7568 37.632 55.9701 37.12 56.1408 36.608C56.3541 36.096 56.5248 35.5627 56.6528 35.008L62.7968 36.864C62.5834 37.8027 62.2421 38.7413 61.7728 39.68C61.3461 40.6187 60.8341 41.5147 60.2368 42.368C59.6821 43.2213 59.0208 44.032 58.2528 44.8C57.4848 45.5253 56.6314 46.144 55.6928 46.656C54.7968 47.168 53.8368 47.5307 52.8128 47.744C51.8314 47.9573 50.8501 48.064 49.8688 48.064Z"
        fill="#FBFEFC"
      />
      <path
        d="M65.2038 47.552L70.7078 14.272H77.6198L76.6598 20.16C77.1718 19.2213 77.7904 18.3467 78.5158 17.536C79.2411 16.7253 80.0518 16.0213 80.9478 15.424C81.8438 14.8267 82.7824 14.4 83.7638 14.144C84.7878 13.888 85.7905 13.76 86.7718 13.76C87.7104 13.76 88.5851 13.888 89.3958 14.144C90.2491 14.4 90.9744 14.8267 91.5718 15.424C92.1691 15.9787 92.6385 16.6613 92.9798 17.472C93.3211 18.24 93.5344 19.072 93.6198 19.968C93.7051 20.8213 93.7051 21.696 93.6198 22.592C93.5771 23.488 93.4705 24.4053 93.2998 25.344H86.3878C86.4731 24.9173 86.5371 24.4907 86.5798 24.064C86.6224 23.6373 86.6224 23.232 86.5798 22.848C86.5371 22.4213 86.4731 22.016 86.3878 21.632C86.3025 21.248 86.1318 20.9067 85.8758 20.608C85.6625 20.2667 85.3638 20.032 84.9798 19.904C84.6385 19.7333 84.2545 19.648 83.8278 19.648C83.1025 19.648 82.3558 19.7547 81.5878 19.968C80.8624 20.1387 80.1798 20.4373 79.5398 20.864C78.8998 21.2907 78.3238 21.8027 77.8118 22.4C77.2998 22.9973 76.8731 23.6373 76.5318 24.32C76.1904 24.96 75.9131 25.6427 75.6998 26.368C75.5291 27.0933 75.3798 27.7973 75.2518 28.48L72.1158 47.552H65.2038Z"
        fill="#FBFEFC"
      />
      <path
        d="M138.85 48.064C137.612 48.064 136.418 47.8933 135.266 47.552C134.114 47.2533 133.09 46.7413 132.194 46.016C131.34 45.2907 130.636 44.416 130.082 43.392C129.57 42.3253 129.207 41.216 128.994 40.064C128.78 38.8693 128.695 37.6533 128.738 36.416C128.78 35.1787 128.908 33.9413 129.122 32.704L130.21 26.304C130.38 25.28 130.615 24.256 130.914 23.232C131.212 22.208 131.618 21.2053 132.13 20.224C132.642 19.2427 133.282 18.3467 134.05 17.536C134.818 16.6827 135.671 15.9573 136.61 15.36C137.548 14.7627 138.551 14.3573 139.618 14.144C140.684 13.888 141.73 13.76 142.754 13.76C143.906 13.76 145.036 13.9093 146.146 14.208C147.255 14.464 148.236 14.912 149.09 15.552C149.943 16.192 150.647 16.9813 151.202 17.92C151.799 18.8587 152.226 19.8613 152.482 20.928L155.81 0.512001H162.722L154.978 47.552H148.066L148.834 42.624C148.279 43.4773 147.639 44.2667 146.914 44.992C146.188 45.7173 145.378 46.3147 144.482 46.784C143.586 47.2533 142.647 47.5733 141.666 47.744C140.727 47.9573 139.788 48.064 138.85 48.064ZM141.666 42.176C142.604 42.176 143.564 42.048 144.546 41.792C145.527 41.536 146.423 41.088 147.234 40.448C148.044 39.808 148.684 39.04 149.154 38.144C149.623 37.2053 149.922 36.2667 150.05 35.328L151.138 28.928C151.266 28.2027 151.33 27.4773 151.33 26.752C151.372 25.984 151.33 25.2587 151.202 24.576C151.116 23.8933 150.924 23.232 150.626 22.592C150.37 21.952 149.964 21.4187 149.41 20.992C148.898 20.5227 148.3 20.1813 147.618 19.968C146.978 19.7547 146.274 19.648 145.506 19.648C144.524 19.648 143.5 19.8187 142.434 20.16C141.41 20.4587 140.492 20.9707 139.682 21.696C138.914 22.4213 138.295 23.296 137.826 24.32C137.399 25.3013 137.1 26.2827 136.93 27.264L135.906 33.664C135.778 34.3467 135.692 35.0507 135.65 35.776C135.65 36.4587 135.714 37.1413 135.842 37.824C135.97 38.464 136.204 39.0827 136.546 39.68C136.887 40.2347 137.314 40.704 137.826 41.088C138.338 41.472 138.914 41.7493 139.554 41.92C140.236 42.0907 140.94 42.176 141.666 42.176Z"
        fill="#FBFEFC"
      />
      <path
        d="M174.281 48.064C172.915 48.064 171.571 47.936 170.249 47.68C168.969 47.4667 167.774 47.04 166.665 46.4C165.555 45.76 164.595 44.9493 163.785 43.968C163.017 42.9867 162.419 41.8773 161.993 40.64C161.609 39.4027 161.417 38.1227 161.417 36.8C161.417 35.4347 161.523 34.0693 161.737 32.704L162.825 26.304C162.995 25.152 163.294 24 163.721 22.848C164.147 21.696 164.723 20.608 165.449 19.584C166.217 18.56 167.091 17.664 168.073 16.896C169.097 16.128 170.185 15.5093 171.337 15.04C172.489 14.528 173.662 14.1867 174.857 14.016C176.051 13.8453 177.225 13.76 178.377 13.76C179.742 13.76 181.086 13.888 182.409 14.144C183.731 14.3573 184.947 14.784 186.057 15.424C187.209 16.0213 188.19 16.832 189.001 17.856C189.811 18.8373 190.409 19.9467 190.793 21.184C191.219 22.3787 191.433 23.6587 191.433 25.024C191.475 26.3893 191.369 27.7547 191.113 29.12L190.345 33.856H168.457C168.286 34.9227 168.265 35.9893 168.393 37.056C168.521 38.1227 168.862 39.0613 169.417 39.872C170.014 40.64 170.782 41.216 171.721 41.6C172.702 41.984 173.726 42.176 174.793 42.176C175.561 42.176 176.329 42.1333 177.097 42.048C177.907 41.92 178.697 41.6853 179.465 41.344C180.233 41.0027 180.915 40.5333 181.513 39.936C182.153 39.3387 182.558 38.6347 182.729 37.824H189.577C189.363 38.8907 188.979 39.936 188.425 40.96C187.913 41.9413 187.251 42.8587 186.441 43.712C185.673 44.5227 184.777 45.2267 183.753 45.824C182.771 46.3787 181.747 46.8267 180.681 47.168C179.614 47.5093 178.547 47.744 177.481 47.872C176.414 48 175.347 48.064 174.281 48.064ZM184.393 27.968C184.606 26.9013 184.649 25.856 184.521 24.832C184.393 23.808 184.073 22.8907 183.561 22.08C183.049 21.2693 182.323 20.672 181.385 20.288C180.446 19.8613 179.443 19.648 178.377 19.648C177.694 19.648 177.011 19.712 176.329 19.84C175.646 19.968 174.963 20.1813 174.281 20.48C173.641 20.7787 173.043 21.184 172.489 21.696C171.934 22.1653 171.443 22.72 171.017 23.36C170.59 23.9573 170.27 24.5973 170.057 25.28C169.843 25.92 169.673 26.5813 169.545 27.264L169.417 27.968H184.393Z"
        fill="#FBFEFC"
      />
      <path
        d="M202.672 48.064C202.074 48.064 201.456 48 200.816 47.872C200.218 47.744 199.664 47.5307 199.152 47.232C198.682 46.8907 198.277 46.4853 197.936 46.016C197.594 45.5467 197.317 45.0347 197.104 44.48C196.933 43.8827 196.826 43.264 196.784 42.624C196.784 41.984 196.826 41.3653 196.912 40.768C197.04 40.128 197.274 39.5093 197.616 38.912C197.957 38.272 198.405 37.76 198.96 37.376C199.514 36.9493 200.112 36.672 200.752 36.544C201.392 36.3733 202.053 36.288 202.736 36.288C203.333 36.288 203.93 36.352 204.528 36.48C205.168 36.608 205.722 36.8427 206.192 37.184C206.704 37.4827 207.13 37.8667 207.472 38.336C207.856 38.8053 208.133 39.3387 208.304 39.936C208.474 40.4907 208.56 41.088 208.56 41.728C208.602 42.368 208.581 42.9867 208.496 43.584C208.368 44.224 208.133 44.864 207.792 45.504C207.493 46.1013 207.066 46.6133 206.512 47.04C205.957 47.424 205.338 47.68 204.656 47.808C204.016 47.9787 203.354 48.064 202.672 48.064Z"
        fill="#FBFEFC"
      />
      <path
        d="M112.902 11.552C112.176 11.552 111.451 11.424 110.726 11.168C110 10.8693 109.424 10.4427 108.998 9.888C108.614 9.29067 108.358 8.62934 108.23 7.90401C108.102 7.13601 108.102 6.368 108.23 5.6C108.315 5.04534 108.486 4.53334 108.742 4.06401C109.04 3.552 109.403 3.14667 109.83 2.84801C110.299 2.50667 110.79 2.272 111.302 2.144C111.856 2.016 112.411 1.952 112.966 1.952C113.691 1.952 114.416 2.10134 115.142 2.4C115.867 2.656 116.422 3.08267 116.806 3.68C117.232 4.23467 117.51 4.896 117.638 5.664C117.808 6.38934 117.83 7.13601 117.702 7.90401C117.574 8.45867 117.382 8.992 117.126 9.504C116.87 9.97334 116.507 10.3787 116.038 10.72C115.568 11.0187 115.056 11.232 114.502 11.36C113.99 11.488 113.456 11.552 112.902 11.552Z"
        fill="#FBFEFC"
      />
      <path
        d="M115.686 15.6161L114.086 26.4321H111.942C108.486 26.4321 105.947 27.1147 104.326 28.4801C102.662 29.8454 101.83 31.7654 101.83 34.2401C101.83 36.6294 102.598 38.4854 104.134 39.8081C105.627 41.1307 107.611 41.7921 110.086 41.7921C111.792 41.7921 113.264 41.4934 114.502 40.8961C115.696 40.2987 116.614 39.4667 117.254 38.4001C117.894 37.3761 118.214 36.2027 118.214 34.8801H125.318C125.36 36.1601 125.19 37.4401 124.806 38.7201C124.379 40.0001 123.76 41.2161 122.95 42.3681C122.096 43.5201 121.051 44.5227 119.814 45.3761C118.576 46.2294 117.126 46.8907 115.462 47.3601C113.798 47.8721 111.92 48.1281 109.83 48.1281C107.312 48.1281 105.115 47.7867 103.238 47.1041C101.318 46.4214 99.7178 45.4614 98.4378 44.2241C97.1578 42.9867 96.1978 41.5361 95.5578 39.8721C94.8751 38.2081 94.5338 36.3734 94.5338 34.3681C94.5338 31.6801 95.1311 29.3761 96.3258 27.4561C97.5204 25.5787 99.1204 24.1281 101.126 23.1041C103.131 22.0801 105.371 21.4614 107.846 21.2481L108.646 15.6161L115.686 15.6161Z"
        fill="#FBFEFC"
      />
    </svg>
  );
}
