"use client"
import { useRouter } from "next/navigation";

const SortFilter = () => {

  const router = useRouter()

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('sortby', e.target.value);

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    router.push(newPathname)
  }

  return (
    <div className="filter-wrapper filter-wrapper_sort-filter">
    <select className="filter-sort" onChange={handleOptionChange}>
      <option disabled value="">Sort by:</option>
      <option value="newest">Newest members</option>
      <option value="oldest">Oldest members</option>
      <option value="most_recipes">Most recipes</option>
      <option value="most_reviews">Most reviews</option>
      <option value="most_friends">Most friends</option>
    </select>
  </div>
  )
}

export default SortFilter