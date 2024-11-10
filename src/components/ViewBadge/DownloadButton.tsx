'use client';

// Credit: https://dev.to/saranshk/how-to-convert-a-react-component-to-an-image-2jon
import html2canvas from 'html2canvas';
import './DownloadButton.scss';

type DownloadButtonProps = {
  downloadElementId: string;
  downloadFilename: string;
};

export default function DownloadButton({
  downloadElementId,
  downloadFilename
}: DownloadButtonProps) {
  const handleImageDownload = async () => {
    const downloadElement = document.getElementById(downloadElementId);
    if (!downloadElement) return;
    const canvas = await html2canvas(downloadElement, {
      backgroundColor: 'null'
    });
    const data = canvas.toDataURL('image/png');
    const link = document.createElement('a');

    link.href = data;
    link.download = downloadFilename;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={() => {
        handleImageDownload();
      }}
      className="download-button"
    >
      <span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M17.7276 10.3435L12 16.0711M12 16.0711L6.27244 10.3435M12 16.0711V1.92896"
            stroke="currentColor"
            stroke-width="2"
          />
          <path
            d="M3 15.6001V21.0001H21V15.6001"
            stroke="currentColor"
            stroke-width="2"
          />
        </svg>
      </span>
      Download
    </button>
  );
}
