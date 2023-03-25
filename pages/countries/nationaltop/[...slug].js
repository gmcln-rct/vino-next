import { useRouter } from 'next/router'

function FilteredTopCountriesPage() {
  const router = useRouter()
  const { slug } = router.query

  return <div>Filtered countries: {slug}</div>
}

export default FilteredTopCountriesPage