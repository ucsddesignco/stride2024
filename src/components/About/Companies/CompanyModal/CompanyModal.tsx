import { Dialog, Modal } from 'react-aria-components';
import './CompanyModal.scss';
import Image from 'next/image';
import { Company } from '../constants';
import CompanyPolaroid from '../CompanyPolaroid/CompanyPolaroid';

type CompanyModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  companyData: Company;
};

export default function CompanyModal({
  isOpen,
  setIsOpen,
  companyData
}: CompanyModalProps) {
  return (
    <Modal
      isDismissable
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      className="company-modal"
    >
      <Dialog>
        <div id="luma-iframe-container">
          <h3>
            {companyData.name}
            <p>{companyData.description}</p>
          </h3>
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
            }}
            id="company-modal-close-button"
          >
            <Image
              src="/images/icons/close-icon.svg"
              width="35"
              height="35"
              alt="Close Company Modal"
            />
          </button>
        </div>
        <CompanyPolaroid companyData={companyData} />
      </Dialog>
    </Modal>
  );
}
