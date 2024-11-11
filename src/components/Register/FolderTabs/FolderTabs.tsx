import { Dispatch, SetStateAction } from 'react';
import './FolderTabs.scss';

const TABS = [
  { label: 'Color', zIndex: 2 },
  { label: 'Hat', zIndex: 1 },
  { label: 'Accessories', zIndex: 0 }
];

type FolderTabProps = {
  activeTab: boolean;
  label: string;
  handleTabChange: (tab: string) => void;
  zIndex: number;
};

type FolderTabsProps = {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
};

function FolderTab({
  activeTab,
  label,
  handleTabChange,
  zIndex
}: FolderTabProps) {
  return (
    <button
      className="folder-tab"
      type="button"
      onClick={() => handleTabChange(label)}
      style={{
        zIndex: activeTab ? 2 : zIndex
      }}
    >
      <span>{label}</span>

      {activeTab && (
        <div className="active-line1">
          <div className="active-line2" />
        </div>
      )}
    </button>
  );
}

export default function FolderTabs({
  activeTab,
  setActiveTab
}: FolderTabsProps) {
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="folder-tabs-container">
      {TABS.map(({ label, zIndex }) => (
        <FolderTab
          key={label}
          label={label}
          activeTab={activeTab === label}
          handleTabChange={handleTabChange}
          zIndex={zIndex}
        />
      ))}
    </div>
  );
}
