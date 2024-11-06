import { SVGProps, useState } from 'react';
import './CompaniesSVG.scss';
import Image from 'next/image';
import { companies, CompaniesMap } from '../constants';
import MascotTopFolder from '../MascotTopFolder';
import CompanyModal from '../CompanyModal/CompanyModal';
import CompanyPolaroid from '../CompanyPolaroid/CompanyPolaroid';

export default function CompaniesSVG(props: SVGProps<SVGSVGElement>) {
  const [selectedCompany, setSelectedCompany] = useState<keyof CompaniesMap>(
    'The Art of Problem Solving'
  );
  const selectedCompanyData = companies[selectedCompany];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (company: keyof CompaniesMap) => {
    setSelectedCompany(company);
    if (window.innerWidth <= 1024) {
      setIsModalOpen(true);
    }
  };

  return (
    <div id="companies-svg-container">
      <svg
        {...props}
        id="about-companies-svg"
        width="100%"
        viewBox="0 0 328 389"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M321.254 327.704L304.371 335.442C302.834 336.146 301.849 337.681 301.849 339.371L301.849 375.929C301.849 378.317 299.914 380.252 297.526 380.252L13.4743 380.252C11.0869 380.252 9.15153 378.317 9.15154 375.929L9.15154 22.1752C9.15155 19.7879 11.0869 17.8525 13.4743 17.8525L297.476 17.8525C299.864 17.8525 301.799 19.7879 301.799 22.1753L301.799 224.53C301.799 226.202 302.763 227.724 304.275 228.438L321.3 236.482C322.811 237.197 323.776 238.719 323.776 240.391L323.776 303.852L320.321 307.852L323.776 311.852L323.776 323.774C323.776 325.465 322.79 327 321.254 327.704Z"
          fill="black"
          stroke="#FBFEFC"
          stroke-width="0.8"
        />
        <path
          d="M321.622 227.185L303.942 234.919C302.369 235.608 301.352 237.162 301.352 238.88L301.352 375.929C301.352 378.317 299.417 380.252 297.029 380.252L10.6741 380.252C8.28675 380.252 6.35139 378.317 6.3514 375.93L6.3514 22.775C6.35141 20.3876 8.28674 18.4523 10.6741 18.4523L297.449 18.4522C299.829 18.4523 301.761 20.3758 301.771 22.7557L302.224 124.03C302.232 125.703 303.204 127.222 304.721 127.929L321.677 135.831C323.199 136.54 324.173 138.067 324.174 139.747L324.212 223.223C324.213 224.941 323.196 226.497 321.622 227.185Z"
          fill="black"
          stroke="#FBFEFC"
          stroke-width="0.8"
        />
        <path
          d="M321.478 126.897L304.601 134.631C303.062 135.337 302.076 136.876 302.079 138.569L302.188 200.954C302.189 201.546 302.068 202.133 301.833 202.677L297.519 212.652L301.396 218.13C301.912 218.86 302.19 219.733 302.19 220.627L302.19 384.074C302.19 386.461 300.255 388.397 297.867 388.397L184.319 388.397L178.519 382.252L169.518 388.397L83.5185 388.397L80.4185 386.525L77.3185 384.652L70.9185 388.397L4.84635 388.397C2.45896 388.397 0.523598 386.461 0.523608 384.074L0.523638 296.252L4.55131 278.252L0.523614 251.452L0.523628 119.652L4.55132 109.252L0.523623 82.2524L0.523622 16.0322C0.523601 13.6448 2.45897 11.7095 4.84636 11.7095L93.1185 11.7095L100.119 15.2524L104.118 11.7095L252.119 11.7095L257.319 15.0524L260.919 11.7095L297.697 11.7095C300.084 11.7095 302.019 13.6436 302.02 16.0303L302.023 23.7066C302.024 25.3862 302.998 26.9134 304.52 27.6228L321.465 35.5195C322.987 36.229 323.961 37.7561 323.962 39.4357L324 122.965C324.001 124.656 323.015 126.192 321.478 126.897Z"
          fill="black"
          stroke="#FBFEFC"
          stroke-width="0.8"
        />
        <path
          d="M17.4177 387.756V12.0171"
          stroke="#FBFEFC"
          stroke-width="0.8"
        />
        <path
          d="M23.1519 388.252L23.1519 11.8521"
          stroke="#FBFEFC"
          stroke-width="0.8"
        />
        <path
          d="M68.3518 388.253L77.3518 381.253L84.5518 386.453L131.752 388.253L168.952 384.453L178.752 377.453L188.552 384.453L245.352 388.253H184.552L178.352 382.053L169.352 388.253H131.752H83.3518L77.3518 384.453L70.5518 388.253H68.3518Z"
          fill="#FBFEFC"
        />
        <path
          d="M68.3518 388.253L77.3518 381.253L84.5518 386.453L131.752 388.253L168.952 384.453L178.752 377.453L188.552 384.453L245.352 388.253H184.552L178.352 382.053L169.352 388.253H83.3518L77.3518 384.453L70.5518 388.253H68.3518Z"
          stroke="white"
          stroke-width="0.4"
        />
        <path
          d="M251.751 15.2521L226.151 11.8521H252.351L257.351 15.2521C258.618 14.1187 261.191 11.8521 261.351 11.8521H284.151L262.751 14.6521L257.951 20.8521L251.751 15.2521Z"
          fill="#FBFEFC"
          stroke="white"
          stroke-width="0.4"
        />
        <path
          d="M0.561321 120.052V155.052L0.352625 251.452L4.96193 278.252L0.352625 296.452L0.771653 385.452L1.60971 387.052L3.91436 388.252H17.9518V11.8521H4.12388L0.771653 14.2521L0.351807 60.0521V81.8521L4.7516 109.052L0.561321 120.052Z"
          fill="#FBFEFC"
          stroke="white"
          stroke-width="0.4"
        />
        <path
          d="M320.352 302.652L323.752 283.252V303.652L320.352 308.052L323.752 311.852V318.452L315.952 308.052L320.352 302.652Z"
          fill="#FBFEFC"
          stroke="white"
          stroke-width="0.4"
        />
        <path
          d="M313.14 31.2299L320.63 13.9655C322.327 10.0531 320.525 5.50612 316.609 3.81833V3.81833C312.699 2.13345 308.164 3.93703 306.479 7.84674L282.444 63.6188C280.288 68.6221 282.596 74.4259 287.599 76.5821V76.5821C292.603 78.7382 298.406 76.4302 300.563 71.4269L320.771 24.5349"
          stroke="#68DEA3"
          stroke-width="1.07522"
        />
        <foreignObject x="30" y="10" width="266" height="379">
          <div id="about-companies-content-container">
            <div>
              <h3>Recruiting</h3>
              <div className="about-company-pill-container">
                {Object.entries(companies)
                  .filter(([, company]) => company.org_type === 'Recruiting')
                  .map(([companyName, _company]) => (
                    <button
                      key={companyName}
                      onClick={() => handleButtonClick(companyName)}
                      className={`about-company-pill ${selectedCompany === companyName ? 'active' : ''}`}
                      aria-current={
                        selectedCompany === companyName ? 'true' : 'false'
                      }
                    >
                      {companyName}
                    </button>
                  ))}
              </div>
            </div>
            <div>
              <h3>Networking Only</h3>
              <div className="about-company-pill-container">
                {Object.entries(companies)
                  .filter(
                    ([, company]) => company.org_type === 'Networking Only'
                  )
                  .map(([companyName, _company]) => (
                    <button
                      key={companyName}
                      onClick={() => handleButtonClick(companyName)}
                      className={`about-company-pill ${selectedCompany === companyName ? 'active' : ''}`}
                      aria-current={
                        selectedCompany === companyName ? 'true' : 'false'
                      }
                    >
                      {companyName}
                    </button>
                  ))}
              </div>
            </div>

            <div
              id="about-company-info"
              style={{ opacity: selectedCompanyData ? '1' : '0' }}
            >
              <h3>{selectedCompany}</h3>
              <p>{selectedCompanyData?.description}</p>
            </div>
          </div>
        </foreignObject>
      </svg>
      <MascotTopFolder />
      <CompanyPolaroid companyData={selectedCompanyData} />
      <CompanyModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        companyData={selectedCompanyData}
      />
    </div>
  );
}
