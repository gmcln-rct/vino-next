import { useRouter } from 'next/router'

function FilteredGrapesPage() {
  const router = useRouter()
  const { slug } = router.query

  return <div>Filtered grapes: {slug}</div>
}

export default FilteredGrapesPage