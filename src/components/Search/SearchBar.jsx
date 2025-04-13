import { useState } from "react"

function SearchBar() {
    const [search, setSearch] = useState("")
  return (
    <div>
      <input type="text" name="search" value={search} onChange={(e)=>setSearch(e.target.value)}
      className="border-2 py-0.5 mt-8 w-[80%] rounded-md px-6 outline-0"/>
    </div>
  )
}

export default SearchBar
