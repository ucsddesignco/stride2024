import { useState } from 'react';
import './Companies.scss';
import CompanyModal from './CompanyModal/CompanyModal';
import { companies } from './constants';

interface Company {
  company: string;
  org_type: string;
  description: string;
  companyImage: string;
}

export default function Companies() {
  const [selectedButton, setSelectedButton] = useState<string | null>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [companyData, setCompanyData] = useState<Company | null>(null);

  const handleButtonClick = (company: string | null) => {
    setSelectedButton(company);

    if (window.innerWidth <= 468) {
      setIsModalOpen(true);
    }

    const foundCompany = companies.find(obj => obj.company === company);

    if (foundCompany) {
      setCompanyData(foundCompany);
    } else {
      console.error(`Company with name "${company}" not found.`);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedButton('');
  };

  return (
    <div className="companies-section info">
      <h2 className="section-title">Companies and Organizations</h2>
      <svg
        width="1000"
        height="1071"
        viewBox="0 0 900 971"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M803.255 817.341L761.047 836.685C757.206 838.446 754.743 842.284 754.743 846.51L754.743 937.905C754.743 943.873 749.904 948.712 743.936 948.712L33.8059 948.712C27.8374 948.712 22.999 943.873 22.999 937.905L22.999 53.5193C22.9991 47.5509 27.8374 42.7125 33.8059 42.7125L743.811 42.7125C749.78 42.7125 754.618 47.5509 754.618 53.5193L754.618 559.405C754.618 563.585 757.029 567.391 760.808 569.176L803.369 589.287C807.148 591.073 809.559 594.878 809.559 599.058L809.559 757.712L800.922 767.712L809.559 777.712L809.559 807.517C809.559 811.743 807.096 815.581 803.255 817.341Z"
          fill="black"
          stroke="#FBFEFC"
          strokeWidth="2"
        />
        <path
          d="M804.175 566.044L759.976 585.38C756.043 587.101 753.501 590.987 753.501 595.281L753.501 937.905C753.501 943.873 748.663 948.712 742.694 948.712L26.8058 948.712C20.8373 948.712 15.999 943.873 15.999 937.905L15.999 55.0187C15.999 49.0502 20.8374 44.2118 26.8058 44.2119L743.742 44.2119C749.692 44.2118 754.522 49.0208 754.549 54.9703L755.682 308.156C755.7 312.339 758.132 316.136 761.923 317.903L804.313 337.658C808.119 339.431 810.553 343.249 810.555 347.448L810.65 556.138C810.652 560.434 808.11 564.323 804.175 566.044Z"
          fill="black"
          stroke="#FBFEFC"
          strokeWidth="2"
        />
        <path
          d="M803.816 315.323L761.623 334.66C757.776 336.423 755.312 340.27 755.319 344.503L755.591 500.465C755.594 501.947 755.292 503.414 754.703 504.774L743.917 529.712L753.61 543.406C754.902 545.232 755.595 547.413 755.595 549.65L755.595 958.266C755.595 964.235 750.757 969.073 744.789 969.073L460.917 969.073L446.417 953.712L423.917 969.073L208.917 969.073L201.167 964.393L193.417 959.712L177.417 969.073L12.2366 969.073C6.26813 969.073 1.42974 964.235 1.42976 958.266L1.42981 738.712L11.4991 693.712L1.42979 626.712L1.42978 297.212L11.499 271.212L1.42979 203.712L1.42975 38.1616C1.42978 32.1932 6.26814 27.3548 12.2366 27.3548L232.917 27.3548L250.417 36.212L260.417 27.3548L630.417 27.3549L643.417 35.712L652.417 27.3549L744.363 27.3548C750.33 27.3549 755.168 32.1902 755.17 38.1567L755.179 57.3478C755.181 61.5467 757.615 65.3645 761.421 67.1382L803.783 86.8799C807.589 88.6536 810.023 92.4714 810.025 96.6703L810.12 305.493C810.122 309.721 807.659 313.561 803.816 315.323Z"
          fill="black"
          stroke="#FBFEFC"
          strokeWidth="2"
        />
        <path d="M43.665 967.473V28.1242" stroke="#FBFEFC" strokeWidth="2" />
        <path d="M58 968.712L58 27.7121" stroke="#FBFEFC" strokeWidth="2" />
        <path
          d="M171 968.712L193.5 951.212L211.5 964.212L329.5 968.712L422.5 959.212L447 941.712L471.5 959.212L613.5 968.712H461.5L446 953.212L423.5 968.712H329.5H208.5L193.5 959.212L176.5 968.712H171Z"
          fill="#FBFEFC"
          stroke="white"
        />
        <path
          d="M629.499 36.2121L565.499 27.7121H630.999L643.499 36.2121C646.666 33.3787 653.099 27.7121 653.499 27.7121H710.499L656.999 34.7121L644.999 50.2121L629.499 36.2121Z"
          fill="#FBFEFC"
          stroke="white"
        />
        <path
          d="M1.52379 298.212V385.712L1.00205 626.712L12.5253 693.712L1.00205 739.212L2.04962 961.712L4.14476 965.712L9.90639 968.712H45V27.7121H10.4302L2.04962 33.7121L1 148.212V202.712L11.9995 270.712L1.52379 298.212Z"
          fill="#FBFEFC"
          stroke="white"
        />

        <foreignObject
          x="125"
          y="7.5%"
          width="400"
          height="50"
          className="title"
        >
          <div>
            <h3 className="title">Recruiting</h3>
          </div>
        </foreignObject>
        <g className="button-grid">
          {companies
            .filter(obj => obj.org_type === 'Recruiting')
            .map((obj, index) => (
              <foreignObject
                key={obj.company}
                x={125 + (index % 2) * 300}
                y={125 + Math.floor(index / 2) * 50}
                width={200 + obj.company.length * 2}
                height="50"
                className="button-display"
              >
                <div>
                  <button
                    className={`svg-button ${selectedButton === obj.company ? 'selected' : ''}`}
                    onClick={() => handleButtonClick(obj.company)}
                  >
                    <p key={obj.company}>{obj.company}</p>
                  </button>
                </div>
              </foreignObject>
            ))}
        </g>
        <foreignObject x="125" y="31%" width="400" height="50">
          <div>
            <h3 className="title">Networking Only</h3>
          </div>
        </foreignObject>
        <g className="button-grid">
          {companies
            .filter(obj => obj.org_type === 'Networking Only')
            .map((obj, index) => (
              <foreignObject
                key={obj.company}
                x={125 + (index % 2) * 300}
                y={350 + Math.floor(index / 2) * 50}
                width={120 + obj.company.length * 2}
                height="50"
                className="button-display"
              >
                <div>
                  <button
                    className={`svg-button ${selectedButton === obj.company ? 'selected' : ''}`}
                    onClick={() => handleButtonClick(obj.company)}
                  >
                    <p key={obj.company}>{obj.company}</p>
                  </button>
                </div>
              </foreignObject>
            ))}
        </g>
        <g className="company-text">
          <foreignObject x="125" y="490" width="60%" height="450px">
            <div className="company-description">
              <h3>{companyData && <h3>{companyData.company}</h3>}</h3>
              <p className="company-writeup">
                {companyData && <p>{companyData.description}</p>}
              </p>
            </div>
          </foreignObject>
        </g>
        <g className="company-polaroid">
          <path
            d="M801 754.712L809.5 706.212V757.212L801 768.212L809.5 777.712V794.212L790 768.212L801 754.712Z"
            fill="#FBFEFC"
            stroke="white"
          />
          <path
            d="M516.067 687.641L548.838 691.038L565.224 692.736L573.416 693.585L578.006 696.208L581.609 694.435L647.4 699.356L714.147 703.12L704.959 785.971L704.066 807.65L703.62 818.49L700.511 820.001L703.396 823.91L703.173 829.33L695.271 941.212L679.284 940.236L673.279 935.921L671.291 939.748L663.297 939.26L631.323 937.307L528.125 926.578L497.365 925.523L498.537 906.078L499.123 896.355L504.134 892.205L499.709 886.633L502.054 847.742L513.509 733.308L516.067 687.641Z"
            fill="black"
            stroke="#FBFEFC"
            strokeWidth="2"
          />
          <rect
            x="526.948"
            y="699.341"
            width="175.308"
            height="184.947"
            transform="rotate(4.53287 526.948 699.341)"
            fill="black"
          />
          <rect
            x="526.948"
            y="699.341"
            width="175.308"
            height="184.947"
            transform="rotate(4.53287 526.948 699.341)"
            stroke="#FBFEFC"
            strokeWidth="2"
          />
          <path
            d="M782.97 76.1558L801.695 32.9947C805.938 23.2139 801.434 11.8463 791.643 7.62689V7.62689C781.868 3.41468 770.53 7.92362 766.318 17.6979L706.231 157.128C700.84 169.636 706.61 184.146 719.119 189.536V189.536C731.627 194.927 746.136 189.156 751.527 176.648L802.047 59.4184"
            stroke="#68DEA3"
            strokeWidth="2.68804"
          />
          <g transform="translate(635, 300)" className="ducky">
            <path
              d="M97.3684 170.868C98.7745 216.887 130.311 253.265 167.807 252.119C205.303 250.974 234.559 212.739 233.153 166.719C231.747 120.699 200.211 84.3213 162.715 85.467C125.219 86.6126 95.9623 124.848 97.3684 170.868Z"
              fill="#3D6C36"
            />
            <path
              d="M134.614 113.882C134.725 117.495 138.697 120.305 143.487 120.158C148.276 120.012 152.07 116.965 151.959 113.352C151.849 109.739 147.877 106.929 143.087 107.076C138.297 107.222 134.504 110.269 134.614 113.882Z"
              fill="#3C2415"
            />
            <path
              d="M145.673 115.753C145.7 116.64 146.676 117.329 147.853 117.293C149.03 117.257 149.962 116.509 149.935 115.623C149.908 114.736 148.932 114.047 147.755 114.083C146.578 114.119 145.646 114.867 145.673 115.753Z"
              fill="white"
            />
            <path
              d="M138.039 225.917C138.149 229.53 142.121 232.34 146.911 232.194C151.701 232.047 155.494 229 155.384 225.387C155.273 221.774 151.301 218.964 146.511 219.111C141.722 219.257 137.928 222.304 138.039 225.917Z"
              fill="#3C2415"
            />
            <path
              d="M149.097 227.788C149.124 228.675 150.1 229.364 151.277 229.328C152.454 229.292 153.387 228.545 153.36 227.658C153.333 226.771 152.356 226.082 151.179 226.118C150.002 226.154 149.07 226.902 149.097 227.788Z"
              fill="white"
            />
            <path
              d="M108.763 217.529C113.87 200.69 123.861 193.957 127.173 192.142C135.892 188.14 141.798 179.444 141.495 169.518C141.192 159.592 135.284 151.993 126.92 148.286L126.946 148.285C126.946 148.285 113.195 143.483 105.805 123.383C102.946 115.852 99.5365 111.417 95.9844 111.526C87.3789 111.789 81.2066 138.556 82.2076 171.316C83.2085 204.077 91.0034 230.417 99.609 230.154C103.188 230.045 106.358 225.328 108.749 217.516L108.763 217.529Z"
              fill="#F7941D"
            />
            <path
              d="M87.1438 289.14C73.1419 283.362 72.1214 263.92 85.4414 256.707L108.333 244.312C119.951 238.021 134.158 245.988 134.851 259.181L136.023 281.507C136.715 294.7 123.42 304.11 111.208 299.07L87.1438 289.14Z"
              fill="#553618"
            />
            <path
              d="M84.0114 83.3088C70.0096 77.5306 68.9891 58.0885 82.309 50.8762L105.201 38.4809C116.819 32.1904 131.026 40.1569 131.719 53.3499L132.89 75.6759C133.583 88.8689 120.288 98.2791 108.075 93.2394L84.0114 83.3088Z"
              fill="#553618"
            />
          </g>
          {companyData?.companyImage && (
            <foreignObject
              x="530"
              y="750px"
              width="25%"
              height="150px"
              className="company-image"
            >
              <div>
                <img
                  src={companyData?.companyImage || 'undefined'}
                  alt={companyData?.company || 'Company image'}
                  width="150px"
                  height="100px"
                />
              </div>
            </foreignObject>
          )}
        </g>
        {isModalOpen && (
          <g className="company-modal">
            <foreignObject x="125" y="540" width="80%" height="500px">
              <CompanyModal isOpen={isModalOpen} onClose={() => closeModal()}>
                {companyData && (
                  <div className="company-description">
                    <h3>{companyData && <h3>{companyData.company}</h3>}</h3>
                    <p className="modal-text">
                      {companyData && <p>{companyData.description}</p>}
                    </p>
                  </div>
                )}
              </CompanyModal>
            </foreignObject>
            <g transform="translate(250,840)">
              <path
                d="M21.0666 1.64149L53.8379 5.03803L70.2235 6.7363L78.4163 7.58543L83.0057 10.2076L86.6092 8.43457L152.4 13.3556L219.147 17.1198L209.959 99.9711L209.066 121.65L208.62 132.49L205.511 134.001L208.396 137.91L208.173 143.33L200.271 255.212L184.284 254.236L178.279 249.921L176.291 253.748L168.297 253.26L136.323 251.307L33.1253 240.578L2.36482 239.523L3.53706 220.078L4.12318 210.355L9.13436 206.205L4.7093 200.633L7.05379 161.742L18.5092 47.3076L21.0666 1.64149Z"
                fill="black"
                stroke="#FBFEFC"
                stroke-width="2"
              />
              <rect
                x="31.9482"
                y="13.3409"
                width="175.308"
                height="184.947"
                transform="rotate(4.53287 31.9482 13.3409)"
                fill="black"
              />
              <rect
                x="31.9482"
                y="13.3409"
                width="175.308"
                height="184.947"
                transform="rotate(4.53287 31.9482 13.3409)"
                stroke="#FBFEFC"
                stroke-width="2"
              />
            </g>
            {companyData?.companyImage && (
              <foreignObject
                x="285"
                y="900px"
                width="25%"
                height="150px"
                className="company-image"
              >
                <div>
                  <img
                    src={companyData?.companyImage || 'undefined'}
                    alt={companyData?.company || 'Company image'}
                    width="150px"
                    height="100px"
                  />
                </div>
              </foreignObject>
            )}
          </g>
        )}
      </svg>
    </div>
  );
}
