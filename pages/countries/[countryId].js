import { useRouter } from 'next/router';

function CountryDetailPage() {
  const router = useRouter();
  const { pageId } = router.query;

  return <div>Detail page for Country {pageId}</div>;
}

export default CountryDetailPage;