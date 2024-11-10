import './Agenda.scss';

const times = ['10:00 AM', '10:30 AM', '11:30 AM', '1:00 PM', '2:00 PM'];
const events = [
  'Doors Open',
  'Deloitte Talk',
  'Illumina Talk',
  'CoNote Talk',
  'Doors Close'
];

export default function Agenda() {
  return (
    <section id="agenda-section">
      <h2>Agenda</h2>
      <svg
        id="mobile-agenda-svg-container"
        width="100%"
        viewBox="0 0 348 527"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M250.577 51.3233C250.577 51.3233 298.295 100.997 249.232 145.94L202.241 71.2056L221.64 43.5037L250.581 51.3297L250.577 51.3233Z"
          fill="#1F1F1F"
        />
        <path
          d="M250.576 51.3223C250.576 51.3223 298.294 100.996 249.231 145.939L240.702 132.374C261.703 117.53 268.752 77.0182 249.092 53.574L250.58 51.3287L250.576 51.3223Z"
          fill="#141414"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M251.053 50.8629L250.576 51.3214C251.053 50.8629 251.054 50.8633 251.054 50.8639L251.056 50.866L251.064 50.8737L251.091 50.9027C251.115 50.928 251.15 50.9652 251.196 51.0142C251.287 51.1122 251.42 51.2571 251.592 51.4473C251.934 51.8277 252.428 52.3894 253.038 53.119C254.258 54.5782 255.943 56.7101 257.81 59.4086C261.541 64.8026 266.008 72.4751 268.932 81.5735C271.857 90.6743 273.243 101.219 270.786 112.337C268.328 123.461 262.033 135.109 249.679 146.427L249.1 146.963L248.784 145.45C260.961 134.296 267.1 122.881 269.493 112.051C271.888 101.215 270.544 90.9141 267.672 81.9786C264.799 73.0406 260.404 65.4859 256.721 60.1617C254.88 57.501 253.221 55.4011 252.023 53.9682C251.424 53.2518 250.94 52.7024 250.608 52.3332C250.442 52.1486 250.313 52.0091 250.227 51.9164C250.184 51.87 250.151 51.8353 250.129 51.8125L250.105 51.7872L250.1 51.7813L250.099 51.7801C250.099 51.7801 250.101 51.7777 250.549 51.3471L250.019 51.6801L250.015 51.6738L251.053 50.8629Z"
          fill="#FBFEFC"
        />
        <path
          d="M346.365 283.005L346.365 523.85L160.505 523.85L148.264 516.541L147.68 516.193L147.142 516.608L137.731 523.85L2.36548 523.85L2.36548 439.76L7.14326 425.847L7.24006 425.565L7.16674 425.276L2.36548 406.359L2.36548 73.8496L83.1235 73.8496L90.9997 85.072L91.5934 85.9179L92.4193 85.2968L107.642 73.8496L216.125 73.8496L223.098 82.1911L223.897 83.1464L224.657 82.1605L231.067 73.8496L302.786 73.8496L346.365 149.963L346.365 259.702L339.873 270.64L339.576 271.141L339.865 271.647L346.365 283.005Z"
          fill="black"
          stroke="#FBFEFC"
          stroke-width="2"
        />
        <path
          d="M303.365 76.5841L345.634 149.85L303.365 149.85L303.365 76.5841Z"
          fill="#FBFEFC"
          stroke="#FBFEFC"
          stroke-width="2"
        />
        <path
          d="M147.705 508.05L137.798 524.003L147.705 516.422L160.843 524.003L239.025 523.582L161.705 519.37L147.705 508.05Z"
          fill="#FBFEFC"
          stroke="#FBFEFC"
          stroke-width="2"
        />
        <path
          d="M82.8772 79.2262L68.6624 74.1719L83.5234 74.1719L92.1384 85.9652L107.215 74.1719L154.167 74.1719L108.076 79.2262L91.0615 95.6526L82.8772 79.2262Z"
          fill="#FBFEFC"
          stroke="#FBFEFC"
          stroke-width="2"
        />
        <path
          d="M216.534 65.6131C215.376 64.6408 215.033 63.1431 215.768 62.2678C216.503 61.3926 218.038 61.4713 219.196 62.4436C220.353 63.4159 220.696 64.9136 219.961 65.7889C219.226 66.6641 217.691 66.5854 216.534 65.6131Z"
          fill="#3C2415"
        />
        <path
          d="M216.319 64.7817C216.035 64.5427 215.95 64.1749 216.131 63.9601C216.311 63.7454 216.688 63.7649 216.972 64.0039C217.257 64.2428 217.341 64.6106 217.161 64.8254C216.981 65.0402 216.604 65.0206 216.319 64.7817Z"
          fill="#FBFEFC"
        />
        <path
          d="M230.689 39.7654C229.678 38.9163 229.379 37.6085 230.021 36.8442C230.663 36.08 232.003 36.1487 233.014 36.9978C234.025 37.8468 234.324 39.1547 233.682 39.919C233.04 40.6832 231.7 40.6145 230.689 39.7654Z"
          fill="#3C2415"
        />
        <path
          d="M230.5 39.0397C230.252 38.8308 230.178 38.5091 230.336 38.3211C230.494 38.1332 230.823 38.1502 231.072 38.3591C231.321 38.568 231.395 38.8897 231.237 39.0776C231.079 39.2655 230.749 39.2485 230.5 39.0397Z"
          fill="#FBFEFC"
        />
        <path
          d="M235.523 78.3388C254.533 70.1515 264.546 50.9839 257.89 35.5267C250.273 17.8419 227.248 15.5446 211.417 22.3632C192.407 30.5504 182.393 49.718 189.05 65.1753C195.707 80.6325 216.514 86.526 235.523 78.3388Z"
          fill="#4EA664"
        />
        <path
          opacity="0.5"
          d="M247.117 23.3761C248.954 26.2848 250.562 29.3793 251.54 32.6205C252.464 35.6844 252.812 38.7045 252.947 41.8935C253.882 63.95 230.598 74.2912 211.706 81.4904C219.177 82.7187 227.531 81.7733 235.564 78.3136C237.777 77.3604 239.869 76.2583 241.826 75.0306C256.652 65.7086 263.766 49.1722 257.89 35.5271C256.628 32.5971 254.943 30.0894 252.938 27.9757C251.382 26.3543 249.614 24.9294 247.675 23.7127C247.49 23.5984 247.304 23.4862 247.117 23.3761Z"
          fill="#158A47"
        />
        <path
          d="M246.878 48.2819C245.816 45.8168 243.445 44.469 241.582 45.2715C239.719 46.074 239.069 48.7229 240.131 51.1879C241.192 53.653 243.563 55.0008 245.427 54.1984C247.29 53.3959 247.94 50.747 246.878 48.2819Z"
          fill="black"
        />
        <path
          d="M245.209 47.0065C244.752 45.9439 243.731 45.3624 242.929 45.7079C242.126 46.0533 241.847 47.1948 242.305 48.2575C242.763 49.3202 243.784 49.9016 244.586 49.5562C245.388 49.2107 245.667 48.0692 245.209 47.0065Z"
          fill="#FBFEFC"
        />
        <path
          d="M198.507 56.3073C197.445 53.8422 195.074 52.4944 193.211 53.2969C191.348 54.0994 190.698 56.7483 191.759 59.2133C192.821 61.6784 195.192 63.0262 197.055 62.2237C198.919 61.4213 199.568 58.7724 198.507 56.3073Z"
          fill="black"
        />
        <path
          d="M196.839 55.0329C196.381 53.9702 195.36 53.3888 194.558 53.7342C193.756 54.0797 193.476 55.2212 193.934 56.2839C194.392 57.3465 195.413 57.928 196.215 57.5825C197.017 57.2371 197.296 56.0956 196.839 55.0329Z"
          fill="#FBFEFC"
        />
        <path
          d="M219.687 4.83714C218.773 4.47101 217.73 4.91417 217.363 5.82762C216.854 7.10613 216.265 8.25747 215.619 9.276C215.772 7.91088 215.582 6.49496 215.008 5.14378C213.225 0.967799 208.388 -0.968042 204.215 0.821333C200.039 2.60435 198.103 7.44184 199.892 11.6138C200.47 12.9714 201.376 14.0875 202.467 14.919C200.36 14.5314 198.9 13.861 198.861 13.8412C197.972 13.4153 196.906 13.7933 196.48 14.6822C196.054 15.5711 196.425 16.6418 197.314 17.0677C197.594 17.2023 204.279 20.3545 211.003 17.7412C211.159 17.6786 211.309 17.6201 211.46 17.5512C215.51 15.8211 218.611 12.3276 220.681 7.1665C221.047 6.25304 220.604 5.20964 219.691 4.8435L219.687 4.83714Z"
          fill="#565656"
        />
        <path
          d="M229.318 68.4739C229.234 68.4113 229.153 68.3382 229.065 68.2692C228.977 68.2002 228.896 68.1271 228.804 68.0518C226.343 65.9167 224.184 62.0308 224.184 62.0308L224.151 62.0341C224.061 61.8775 223.988 61.7192 223.892 61.5666C220.582 56.3016 213.183 54.9915 207.364 58.6501C205.685 59.7057 204.334 61.0701 203.318 62.5873L203.31 62.5745C203.31 62.5745 200.243 66.9963 195.43 70.6609C190.634 74.4927 188.092 79.4807 189.156 84.2065C190.942 92.1421 202.21 96.3606 214.321 93.6346C226.432 90.9086 234.799 82.2579 233.013 74.3223C232.499 72.037 231.199 70.0683 229.318 68.4739Z"
          fill="#F9A825"
        />
        <mask
          id="mask0_6867_8681"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="196"
          y="0"
          width="25"
          height="19"
        >
          <path
            d="M219.687 4.83714C218.773 4.471 217.73 4.91417 217.364 5.82762C216.854 7.10613 216.265 8.25747 215.619 9.276C215.772 7.91088 215.583 6.49496 215.008 5.14378C213.225 0.967798 208.388 -0.968043 204.216 0.821333C200.039 2.60435 198.103 7.44183 199.892 11.6138C200.471 12.9714 201.377 14.0875 202.467 14.919C200.36 14.5314 198.901 13.861 198.861 13.8412C197.973 13.4153 196.906 13.7933 196.48 14.6822C196.054 15.5711 196.425 16.6418 197.314 17.0677C197.594 17.2023 204.279 20.3545 211.003 17.7412C211.159 17.6786 211.309 17.6201 211.461 17.5512C215.51 15.8211 218.611 12.3276 220.681 7.1665C221.047 6.25304 220.604 5.20964 219.691 4.8435L219.687 4.83714Z"
            fill="#434343"
          />
        </mask>
        <g mask="url(#mask0_6867_8681)">
          <path
            d="M202.395 19.5836C202.246 20.3168 211.654 20.5438 212.019 21.1245L223.635 9.17408L219.284 -3.39635C218.161 -3.1221 202.918 -2.1144 202.358 -1.08341C201.065 1.29707 204.102 2.5811 205.553 3.88009C207.153 5.31359 208.586 7.22482 209.485 9.18716C210.024 10.3627 210.248 11.7198 209.656 12.9202C208.964 14.3263 207.317 14.607 206.082 15.3398C205.21 15.8575 204.277 16.3726 203.62 17.1636C203.064 17.8343 202.571 18.7155 202.395 19.5836Z"
            fill="#434343"
          />
        </g>
        <mask
          id="mask1_6867_8681"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="188"
          y="56"
          width="46"
          height="39"
        >
          <path
            d="M229.318 68.4739C229.234 68.4113 229.152 68.3382 229.065 68.2692C228.977 68.2002 228.895 68.1271 228.804 68.0518C226.343 65.9167 224.184 62.0308 224.184 62.0308L224.15 62.0341C224.061 61.8775 223.988 61.7192 223.892 61.5666C220.581 56.3016 213.183 54.9915 207.364 58.6501C205.685 59.7057 204.334 61.0701 203.318 62.5873L203.31 62.5745C203.31 62.5745 200.242 66.9963 195.43 70.6609C190.634 74.4927 188.092 79.4807 189.155 84.2065C190.942 92.1421 202.21 96.3606 214.321 93.6346C226.431 90.9086 234.799 82.2579 233.013 74.3223C232.499 72.037 231.199 70.0683 229.318 68.4739Z"
            fill="#F9A825"
          />
        </mask>
        <g mask="url(#mask1_6867_8681)">
          <path
            d="M196.881 96.4657C197.359 95.0144 198.525 93.7187 199.539 92.6262C204.418 87.3682 211.929 85.1784 217.876 81.4387C231.41 72.9289 219.719 64.2247 213.634 54.5461C214.209 54.1842 214.779 54.2932 215.379 54.4186C217.747 54.9132 220.054 55.6121 222.27 56.5852C223.882 57.2932 225.284 58.1939 226.757 59.1536C229.454 60.9114 232.339 62.2457 235.22 63.6602C238.456 65.2491 240.369 68.0182 241.595 71.3692C242.763 74.561 242.884 77.9855 241.697 81.171C240.714 83.8118 239.273 86.0775 236.881 87.6169C234.45 89.1818 231.981 90.1693 229.229 91.0145C225.823 92.0603 222.446 93.1535 219.115 94.4191L219.075 94.4341C215.441 95.8147 211.836 97.184 208.026 98.018C206.131 98.433 204.253 98.5147 202.347 98.7863C201.026 98.9747 199.679 98.97 198.378 98.5937C197.376 98.304 196.534 97.5225 196.881 96.4657Z"
            fill="#F57F17"
          />
        </g>
        <foreignObject x="15" y="100" width="330" height="413">
          <div id="mobile-agenda-content">
            <h3>Wednesday, Nov. 13th 12-5pm PST</h3>
            <table>
              <thead />
              <tbody>
                {times.map((time, index) => (
                  <tr key={time}>
                    <td>
                      <p>{time}</p>
                    </td>
                    <td>
                      <p>{events[index]}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p id="">*schedule subject to change</p>
          </div>
        </foreignObject>
      </svg>

      <svg
        id="desktop-agenda-svg-container"
        width="100%"
        viewBox="0 0 1293 792"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M82.7933 339.284C82.7933 339.284 8.96141 600.851 302.92 622.304C596.879 643.757 506.789 449.249 506.789 449.249L154.872 271.764L82.7916 339.308L82.7933 339.284Z"
          fill="#694829"
        />
        <path
          d="M70.1044 352.426C70.1044 352.426 19.4168 596.976 256.74 640.325L256.854 320.234L143.863 272.602L70.1044 352.454L70.1044 352.426Z"
          fill="#1F1F1F"
        />
        <path
          d="M70.1043 352.423C70.1043 352.423 19.4168 596.973 256.74 640.321L256.761 582.222C163.649 577.155 63.8656 466.375 79.004 356.474L70.1043 352.45L70.1043 352.423Z"
          fill="#141414"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M67.7539 351.936L70.104 352.423C67.7539 351.936 67.7535 351.938 67.7529 351.941L67.7507 351.952L67.743 351.99L67.7144 352.131C67.6898 352.255 67.654 352.437 67.6085 352.676C67.5174 353.152 67.3872 353.855 67.2282 354.769C66.9102 356.598 66.477 359.275 66.0115 362.692C65.0807 369.525 64.0202 379.32 63.4946 391.205C62.444 414.963 63.5279 447.136 72.1003 480.71C80.6749 514.293 96.7591 549.34 125.748 578.735C154.754 608.147 196.548 631.767 256.309 642.682L259.121 643.213L257.171 637.96C198.27 627.202 157.404 603.998 129.166 575.365C100.912 546.715 85.17 512.496 76.7511 479.523C68.3299 446.541 67.253 414.867 68.29 391.417C68.8082 379.699 69.8535 370.05 70.7676 363.34C71.2246 359.985 71.6486 357.366 71.9573 355.591C72.1116 354.704 72.237 354.028 72.3232 353.576C72.3664 353.351 72.3997 353.181 72.4219 353.07L72.4468 352.946L72.4527 352.917L72.454 352.911C72.454 352.911 72.4422 352.908 70.2358 352.45L72.504 352.451L72.504 352.424L67.7539 351.936Z"
          fill="#FBFEFC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1117.64 42.8432L897.327 42.7651L877.17 61.052L855.077 42.7501L524.877 42.633L478.07 60.9103L453.377 42.6077L204.778 42.5195L204.592 566.513L219.181 596.418L204.574 618.513L204.526 752.413L617.575 752.56L646.829 740.87L684.525 752.584L1247.43 752.783L1250.08 372.534L1239.12 354.33L1250.1 336.784L1250.16 162.618L1117.64 42.8432Z"
          fill="black"
        />
        <path
          d="M646.186 722.016L616.276 751.256L646.18 739.566L685.826 751.281L921.776 750.714L688.428 744.131L646.186 722.016Z"
          fill="#FBFEFC"
          stroke="#FBFEFC"
          strokeWidth="1.3"
        />
        <path
          d="M450.773 52.447L407.876 44.6318L452.726 44.6477L478.72 62.857L524.226 44.6731L665.926 44.7233L526.823 52.474L475.464 77.8058L450.773 52.447Z"
          fill="#FBFEFC"
          stroke="#FBFEFC"
          strokeWidth="1.3"
        />
        <mask
          id="mask0_1_4"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="204"
          y="42"
          width="1047"
          height="711"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1117.64 42.8432L897.327 42.7651L877.17 61.052L855.077 42.7501L524.877 42.633L478.07 60.9103L453.377 42.6077L204.778 42.5195L204.592 566.513L219.181 596.418L204.574 618.513L204.526 752.413L617.575 752.56L646.829 740.87L684.525 752.584L1247.43 752.783L1250.08 372.534L1239.12 354.33L1250.1 336.784L1250.16 162.618L1117.64 42.8432Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_1_4)">
          <path
            d="M897.327 42.7645L897.328 40.1645L896.324 40.1641L895.58 40.8388L897.327 42.7645ZM1117.64 42.8426L1119.38 40.9138L1118.64 40.243L1117.64 40.2426L1117.64 42.8426ZM877.17 61.0513L875.512 63.0535L877.248 64.4915L878.918 62.9768L877.17 61.0513ZM855.077 42.7495L856.736 40.7472L856.015 40.1498L855.078 40.1495L855.077 42.7495ZM524.877 42.6324L524.878 40.0324L524.388 40.0322L523.931 40.2104L524.877 42.6324ZM478.07 60.9097L476.523 62.9985L477.678 63.8545L479.016 63.3316L478.07 60.9097ZM453.377 42.607L454.926 40.5182L454.236 40.0074L453.378 40.007L453.377 42.607ZM204.778 42.5189L204.779 39.9189L202.179 39.918L202.178 42.518L204.778 42.5189ZM204.592 566.513L201.992 566.512L201.992 567.112L202.255 567.653L204.592 566.513ZM219.181 596.418L221.35 597.851L222.169 596.613L221.518 595.279L219.181 596.418ZM204.574 618.513L202.405 617.079L201.974 617.73L201.974 618.512L204.574 618.513ZM204.526 752.413L201.926 752.412L201.925 755.012L204.525 755.013L204.526 752.413ZM617.575 752.559L617.574 755.159L618.076 755.159L618.54 754.974L617.575 752.559ZM646.829 740.87L647.601 738.387L646.721 738.113L645.866 738.455L646.829 740.87ZM684.525 752.583L683.755 755.066L684.13 755.183L684.524 755.183L684.525 752.583ZM1247.43 752.783L1247.42 755.383L1250.01 755.383L1250.03 752.8L1247.43 752.783ZM1250.08 372.533L1252.68 372.551L1252.69 371.819L1252.31 371.191L1250.08 372.533ZM1239.12 354.33L1236.91 352.951L1236.07 354.304L1236.89 355.672L1239.12 354.33ZM1250.1 336.783L1252.3 338.162L1252.7 337.531L1252.7 336.784L1250.1 336.783ZM1250.16 162.617L1252.76 162.618L1252.76 161.462L1251.9 160.687L1250.16 162.617ZM897.326 45.3645L1117.64 45.4426L1117.64 40.2426L897.328 40.1645L897.326 45.3645ZM878.918 62.9768L899.075 44.6901L895.58 40.8388L875.424 59.1257L878.918 62.9768ZM853.419 44.7517L875.512 63.0535L878.83 59.049L856.736 40.7472L853.419 44.7517ZM524.876 45.2324L855.076 45.3495L855.078 40.1495L524.878 40.0324L524.876 45.2324ZM479.016 63.3316L525.822 45.0542L523.931 40.2104L477.125 58.4878L479.016 63.3316ZM451.829 44.6959L476.523 62.9985L479.619 58.821L454.926 40.5182L451.829 44.6959ZM204.777 45.1189L453.376 45.207L453.378 40.007L204.779 39.9189L204.777 45.1189ZM207.192 566.514L207.378 42.5198L202.178 42.518L201.992 566.512L207.192 566.514ZM221.518 595.279L206.929 565.373L202.255 567.653L216.844 597.558L221.518 595.279ZM206.742 619.946L221.35 597.851L217.012 594.984L202.405 617.079L206.742 619.946ZM207.126 752.414L207.174 618.514L201.974 618.512L201.926 752.412L207.126 752.414ZM617.576 749.959L204.527 749.813L204.525 755.013L617.574 755.159L617.576 749.959ZM645.866 738.455L616.611 750.145L618.54 754.974L647.794 743.284L645.866 738.455ZM685.297 750.1L647.601 738.387L646.059 743.352L683.755 755.066L685.297 750.1ZM1247.43 750.183L684.526 749.983L684.524 755.183L1247.42 755.383L1247.43 750.183ZM1247.49 372.516L1244.83 752.765L1250.03 752.8L1252.68 372.551L1247.49 372.516ZM1236.89 355.672L1247.86 373.876L1252.31 371.191L1241.34 352.987L1236.89 355.672ZM1247.89 335.405L1236.91 352.951L1241.32 355.708L1252.3 338.162L1247.89 335.405ZM1247.56 162.616L1247.5 336.783L1252.7 336.784L1252.76 162.618L1247.56 162.616ZM1251.9 160.687L1119.38 40.9138L1115.9 44.7714L1248.42 164.546L1251.9 160.687Z"
            fill="#FBFEFC"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1249.66 162.959L1117.1 162.912L1117.15 43.1855L1249.66 162.959Z"
            fill="#FBFEFC"
          />
        </g>
        <foreignObject x="200" y="48" width="1050" height="700">
          <div id="desktop-agenda-content">
            <h3>Wednesday, Nov. 13th 12-5pm PST</h3>
            <table>
              <thead />
              <tbody>
                {times.map((time, index) => (
                  <tr key={time}>
                    <td>
                      <p>{time}</p>
                    </td>
                    <td>
                      <p>{events[index]}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p id="">*schedule subject to change</p>
          </div>
        </foreignObject>
        <path
          d="M168.433 406.34C94.2777 417.872 26.5607 378.34 17.1826 318.043C6.45314 249.056 72.7131 197.589 134.472 187.986C208.627 176.454 276.344 215.987 285.722 276.284C295.1 336.581 242.588 394.809 168.433 406.34Z"
          fill="#4EA664"
        />
        <path
          opacity="0.5"
          d="M26.8184 259.958C26.79 272.431 27.8209 285.034 31.0708 296.871C34.1431 308.061 38.9006 318.004 44.637 328.056C84.3124 397.576 175.745 384.413 247.635 370.074C227.066 388.257 199.594 401.468 168.258 406.341C159.624 407.684 151.078 408.334 142.7 408.34C79.2011 408.318 25.4609 371.271 17.1823 318.043C15.4047 306.614 15.7404 295.665 17.8189 285.308C19.4685 277.328 22.1485 269.543 25.7542 262.068C26.1007 261.361 26.4555 260.657 26.8184 259.958Z"
          fill="#158A47"
        />
        <path
          d="M75.5945 335.966C74.0989 326.35 78.7786 317.638 86.047 316.508C93.3154 315.378 100.42 322.257 101.916 331.873C103.411 341.489 98.7314 350.2 91.463 351.331C84.1946 352.461 77.0901 345.582 75.5945 335.966Z"
          fill="black"
        />
        <path
          d="M78.257 328.832C77.6122 324.687 79.626 320.932 82.7548 320.445C85.8837 319.959 88.9428 322.925 89.5875 327.07C90.2322 331.216 88.2184 334.971 85.0896 335.457C81.9608 335.944 78.9017 332.978 78.257 328.832Z"
          fill="#FBFEFC"
        />
        <path
          d="M239.583 267.298C238.087 257.682 242.767 248.97 250.035 247.84C257.304 246.71 264.408 253.589 265.904 263.205C267.399 272.821 262.72 281.532 255.451 282.663C248.183 283.793 241.078 276.914 239.583 267.298Z"
          fill="black"
        />
        <path
          d="M242.245 260.166C241.6 256.021 243.614 252.266 246.743 251.779C249.871 251.293 252.931 254.259 253.575 258.404C254.22 262.55 252.206 266.305 249.077 266.791C245.949 267.278 242.889 264.312 242.245 260.166Z"
          fill="#FBFEFC"
        />
        <path
          d="M75.2751 150.127C77.3733 147.24 81.4318 146.588 84.3182 148.686C88.3481 151.629 92.3783 154.027 96.327 155.908C93.2234 152.012 91.0734 147.3 90.2309 142.043C87.6492 125.783 98.7671 110.509 115.028 107.955C131.29 105.373 146.565 116.49 149.12 132.75C149.962 138.034 149.334 143.208 147.589 147.865C153.311 142.61 156.499 137.737 156.581 137.6C158.489 134.578 162.493 133.681 165.515 135.588C168.538 137.496 169.463 141.499 167.555 144.522C166.955 145.475 152.512 168.047 126.826 172.994C126.227 173.103 125.655 173.212 125.056 173.293C109.285 175.793 93.026 171.049 76.7154 159.196C73.8291 157.098 73.1768 153.04 75.2751 150.154L75.2751 150.127Z"
          fill="#565656"
        />
        <path
          d="M168.456 364.084C168.592 363.73 168.701 363.349 168.837 362.968C168.974 362.586 169.083 362.205 169.219 361.797C172.655 350.496 171.789 334.4 171.789 334.4L171.898 334.345C171.871 333.692 171.79 333.065 171.79 332.412C171.798 309.862 191.987 291.567 216.908 291.576C224.099 291.579 230.88 293.161 236.926 295.859L236.926 295.805C236.926 295.805 254.872 303.464 276.715 305.432C298.83 307.946 316.258 318.356 322.108 334.916C331.931 362.726 305.472 397.413 263.032 412.404C220.592 427.395 178.215 416.977 168.392 389.167C165.563 381.159 165.756 372.607 168.456 364.084Z"
          fill="#F9A825"
        />
        <mask
          id="mask1_1_4"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="74"
          y="107"
          width="95"
          height="67"
        >
          <path
            d="M75.2751 150.129C77.3733 147.242 81.4318 146.59 84.3181 148.688C88.3481 151.631 92.3783 154.029 96.327 155.91C93.2234 152.014 91.0734 147.302 90.2309 142.045C87.6492 125.785 98.7671 110.511 115.028 107.957C131.29 105.375 146.565 116.492 149.12 132.752C149.962 138.036 149.334 143.21 147.589 147.866C153.311 142.612 156.499 137.738 156.581 137.602C158.489 134.58 162.493 133.683 165.515 135.59C168.538 137.498 169.463 141.501 167.555 144.524C166.955 145.477 152.512 168.049 126.826 172.996C126.227 173.105 125.655 173.214 125.056 173.295C109.285 175.795 93.026 171.051 76.7154 159.198C73.8291 157.1 73.1768 153.042 75.2751 150.156L75.2751 150.129Z"
            fill="#434343"
          />
        </mask>
        <g mask="url(#mask1_1_4)">
          <path
            d="M156.81 162.047C158.681 164.011 130.234 182.855 130.233 185.342L71.5183 171.059L60.6301 124.072C64.6071 122.748 113.35 96.439 117.058 98.5242C125.62 103.339 118.77 113.14 116.824 119.925C114.676 127.413 113.963 136.045 114.987 143.805C115.6 148.453 117.531 153.051 121.662 155.596C126.501 158.577 132.099 156.262 137.303 156.131C140.979 156.038 144.838 155.818 148.379 156.981C151.381 157.967 154.594 159.722 156.81 162.047Z"
            fill="#434343"
          />
        </g>
        <mask
          id="mask2_1_4"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="166"
          y="291"
          width="159"
          height="129"
        >
          <path
            d="M168.456 364.085C168.592 363.731 168.701 363.35 168.837 362.969C168.974 362.587 169.083 362.206 169.219 361.798C172.655 350.497 171.789 334.401 171.789 334.401L171.898 334.346C171.871 333.693 171.79 333.066 171.79 332.413C171.798 309.863 191.987 291.568 216.908 291.577C224.099 291.58 230.88 293.162 236.926 295.86L236.926 295.806C236.926 295.806 254.872 303.465 276.715 305.433C298.83 307.947 316.258 318.357 322.108 334.917C331.931 362.727 305.472 397.414 263.032 412.405C220.592 427.396 178.215 416.978 168.392 389.168C165.563 381.16 165.756 372.608 168.456 364.085Z"
            fill="#F9A825"
          />
        </mask>
        <g mask="url(#mask2_1_4)">
          <path
            d="M322.034 387.456C317.769 383.921 311.689 382.193 306.469 380.795C281.346 374.063 254.064 381.827 228.59 381.818C170.624 381.797 189.727 332.523 189.742 291.07C187.277 291.069 185.738 292.502 184.136 294.045C177.823 300.13 172.087 306.726 167.16 313.989C163.576 319.272 161.009 324.741 158.339 330.529C153.449 341.128 147.165 350.79 141.048 360.689C134.177 371.81 133.647 384.001 136.346 396.655C138.916 408.707 145.152 419.453 154.938 426.945C163.051 433.156 171.848 437.332 182.159 437.445C192.641 437.56 202.126 435.83 212.206 433.116C224.681 429.757 237.156 426.6 249.825 424.059L249.976 424.029C263.798 421.257 277.506 418.508 290.811 413.72C297.432 411.337 303.355 407.966 309.729 405.124C314.149 403.154 318.276 400.541 321.544 396.876C324.06 394.055 325.14 390.03 322.034 387.456Z"
            fill="#F57F17"
          />
        </g>
      </svg>
    </section>
  );
}
