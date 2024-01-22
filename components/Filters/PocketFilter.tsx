
import { Button } from "@components/Button"
import { useRouter } from "next/navigation";

type Props = {
  list: [];
}

const PocketFilter = ({list}: Props) => {

  const router = useRouter()

  const handlePocketChange = (name: string) => {
    const newPathname = `/pocket/${name.replaceAll(" ", "-").toLowerCase()}`
    router.push(newPathname)
  }

  return (
    <div className="filter-wrapper filter-wrapper_pocket-filter">

      { list?.map((name, key) => (
          <Button key={key} onClick={() => handlePocketChange(name)} type="outline" gap="narrow" color="gray" text={name} />
      ))}
      
    </div>
  )
}

export default PocketFilter