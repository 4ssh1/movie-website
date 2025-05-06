import { useEffect, useState } from "react"
import PaginationBtn from "../consts/PaginationBtn"
import { fetchTrending, imagePath } from "../api/api"
import { usePages } from "../context/ContextProvAll"
import Cards from "../components/Card"
import Hero from "../components/Hero"

function HomePage() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const {timeWindow, count, totalPages, setTotalPages} = usePages()
  const noImage = "noImage.jpg" 
  
  const skeletonArray = new Array(10).fill(0)

  useEffect(()=>{
    fetchTrending(timeWindow, count).then((res)=>{
      setData(res?.results)
      setTotalPages(res?.total_pages)
      setLoading(false)
      console.log(res)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }).catch(err=>console.log(err.message))
  }, [timeWindow, count])

  console.log(totalPages, data, timeWindow)

  return (
    <div className="relative min-h-screen w-full">
      <Hero />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-around w-full gap-3 place-items-center py-10">
            {loading ? skeletonArray.map((_, index) => (
                <div
                  key={index}
                  className="w-[180px] h-[200px] bg-slate-300 animate-pulse rounded overflow-hidden shadow-lg"
                />
                    ))
                    :
                    data && data?.map((item)=>(
                      <Cards  src={!item?.poster_path ? noImage : `${imagePath}${item?.poster_path}`} key={item?.id}
                      alt={item?.name || item?.title} type={item?.media_type} id={item?.id}/>
                    ))}
                </div>
            <PaginationBtn />
          </div>
  )
}

export default HomePage

