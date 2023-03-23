import { useRouter } from 'next/router'

function FilteredCountriesPage() {
  const router = useRouter()
  const { slug } = router.query

  return <div>Filtered countries: {slug}</div>
}

export default FilteredCountriesPage