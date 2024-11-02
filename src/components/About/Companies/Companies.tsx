import { useState } from 'react';
import './Companies.scss';
import { companies } from './constants';

export default function Companies() {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<string>('');
  const [companyDescription, setCompanyDescription] = useState<string>('');

  const handleButtonClick = (company: string | null) => {
    setSelectedButton(company);
    const companyData = companies.find(obj => obj.company === company);
    setSelectedCompany(company!);
    setCompanyDescription(companyData?.description!);
  };

  return (
    <div className="companies-section info">
      <h2 className="section-title">Companies and Organizations</h2>
      <svg
        width="920"
        height="1071"
        viewBox="0 0 820 971"
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
        <text x="15%" y="10%" className="title">
          Recruiting
        </text>
        <g className="button-grid">
          {companies
            .filter(obj => obj.org_type === 'Recruiting')
            .map((obj, index) => (
              <foreignObject
                key={obj.company}
                x={125 + (index % 2) * 300}
                y={120 + Math.floor(index / 2) * 55}
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
        <text x="15%" y="35%" className="title">
          Networking Only
        </text>
        <g className="button-grid">
          {companies
            .filter(obj => obj.org_type === 'Networking Only')
            .map((obj, index) => (
              <foreignObject
                key={obj.company}
                x={125 + index * 175}
                y={375 + Math.floor(index / 2) * 55}
                width={120 + obj.company.length * 5}
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
        <g>
          <foreignObject x="15%" y="450" width="70%" height="100">
            <div className="company-description">
              <p>{selectedCompany}</p>
              <p>Hello!</p>
            </div>
          </foreignObject>
        </g>
      </svg>
    </div>
  );
}
