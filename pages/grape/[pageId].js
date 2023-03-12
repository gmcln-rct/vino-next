import { useRouter } from 'next/router';

function GrapeDetailPage() {
  const router = useRouter();
  const { pageId } = router.query;

  return <div>Detail page for grape {pageId}</div>;
}

export default GrapeDetailPage;