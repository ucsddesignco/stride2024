import MascotBadge from '@/components/Register/MascotBadge/MascotBadge';
import DownloadButton from '@/components/ViewBadge/DownloadButton';
import { getUser } from './findBadge';
import './ViewBadge.scss';

export default async function ViewBadge({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = await getUser(slug);
  if ('error' in data) {
    return (
      <main id="view-badge-page">
        <h1>{data.error}</h1>
      </main>
    );
  }
  const userData = JSON.parse(JSON.stringify(data));

  return (
    <main id="view-badge-page">
      <MascotBadge formData={userData} mascotData={userData.badge} />
      <DownloadButton
        downloadElementId="mascot-badge"
        downloadFilename="Stride-Badge.png"
      />
    </main>
  );
}
