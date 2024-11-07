import { useState } from 'react';
import './Companies.scss';
import CompanyModal from './CompanyModal/CompanyModal';
import { companies } from './constants';
import CompaniesSVG from './CompaniesSVG/CompaniesSVG';

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

  // const handleButtonClick = (company: string | null) => {
  //   setSelectedButton(company);

  //   if (window.innerWidth <= 468) {
  //     setIsModalOpen(true);
  //   }

  //   const foundCompany = companies.find(obj => obj.company === company);

  //   if (foundCompany) {
  //     setCompanyData(foundCompany);
  //   } else {
  //     console.error(`Company with name "${company}" not found.`);
  //   }
  // };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedButton('');
  };

  return (
    <section className="companies-section info">
      <h2>Companies & Organizations</h2>
      <CompaniesSVG />
    </section>
  );
}
