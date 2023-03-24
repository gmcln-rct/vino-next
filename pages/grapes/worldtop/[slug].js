import { useRouter } from 'next/router'

function FilteredTopGrapesPage() {
  const router = useRouter()
  const { slug } = router.query

  return <div>Filtered countries: {slug}</div>
}

export default FilteredTopGrapesPage