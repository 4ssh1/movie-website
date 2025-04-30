import { useState, useEffect } from "react"
import { fetchSearch, imagePath } from "../../api/api"
import Cards from "../Card"
import PaginationBtn from "../../consts/PaginationBtn"
import { usePages } from "../../../utilities/PaginationCxtProv"


function SearchBar() {
    const [search, setSearch] = useState("")
    const [searchArr, setSearchArr] = useState([])
    const {count, setTotalPages} = usePages()

    useEffect(()=>{
      fetchSearch({query: search, page: count}).then(res=>{
        setSearchArr(res?.results)
        setTotalPages(res?.total_pages)
      })
      filterSearch()
    }, [search])

    console.log(searchArr.map(item=>item?.name))

    function filterSearch(){
      const filtered = searchArr?.filter((searched)=>(
        (searched?.name?.toLowerCase() || searched?.title?.toLowerCase())?.includes(search?.toLowerCase())
      ))

      setSearchArr(filtered)
    }

  return (
    <div>
      <div>
        <input type="text" name="search" value={search} onChange={(e)=>setSearch(e.target.value)}
        className="border-2 py-0.5 sm:mt-8 mt-5 w-[80%] rounded-md sm:px-6 px-3 outline-0"/>
      </div>
      {
        searchArr && searchArr?.length > 0 ?
      <div >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-2 gap-2 place-items-center sm:px-30 py-10">
          {searchArr?.filter(filter=>filter?.media_type !== "person")?.map(item=>(
            <Cards src={`${imagePath}${item?.poster_path}`} key={item?.id}
            alt={item?.name || item?.title} type={item?.media_type} id={item?.id}
            />
          ))}
        </div>
        <div className="flex translate-x-10 w-full">
          <PaginationBtn />
        </div>
      </div>
      :
      <div className=" h-[70vh] flex items-center">
        <p className="sm:text-sm text-xs pl-5 text-blue-950 dark:text-slate-500">
          Start typing to search ...
        </p>
      </div>
      }
    </div>
  )
}

export default SearchBar
