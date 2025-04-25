import { useState, useEffect } from "react"
import {  fetchDiscover, imagePath } from "../../api/api"
import Cards from "../../components/Card"
import ShowsHero from "../../components/shows/showsHero"
import PaginationBtn from "../../consts/PaginationBtn"
import { usePages } from "../../../utilities/PaginationCxtProv"


function TvShowsPage() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const skeletonArray = new Array(10).fill(0)
  const {timeWindow} = usePages()

  useEffect(()=>{
    fetchDiscover("tv", {page, sort_by: timeWindow}).then(res=>{
      setData(res?.results)
      setLoading(false)
    }).catch(err=>{
      console.log(err)
    })
  }, [page, timeWindow])

  console.log(data)

  return (
    <div>
      <ShowsHero />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-2 gap-2 place-items-center sm:px-30 py-10">
          {loading ? skeletonArray.map((_, index) => (
              <div
                key={index}
                className="w-[135px] h-[200px] bg-slate-300 animate-pulse rounded overflow-hidden shadow-lg"
              />
            ))          
          :
          data && data?.map((item)=>(
            <Cards  src={!item?.poster_path ? noImage : `${imagePath}${item?.poster_path}}`} key={item.id} 
            alt={item?.name || item?.title} type={"tv"} id={item?.id}/>
          ))}
        </div>
        <PaginationBtn />
    </div>
  )
}

export default TvShowsPage


