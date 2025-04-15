import { useEffect, useState } from "react"
import PaginationBtn from "../consts/PaginationBtn"
import { fetchTrending, imagePath } from "../api/api"
import { usePages } from "../../utilities/PaginationCxtProv";
import Cards from "../components/Card"
import Hero from "../components/Hero"

function HomePage() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const {isDay, setIsDay} = usePages()

  
  const skeletonArray = new Array(10).fill(0)


  useEffect(()=>{
    fetchTrending().then((res)=>{
      setData(res)
      setLoading(false)
    }).catch(err=>console.log(err))
  }, [])

  console.log(data)

  return (
    <div className="relative min-h-screen w-full">
      <Hero />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-2 gap-2 place-items-center sm:px-30 py-10">
          {loading ? skeletonArray.map((_, index) => (
              <div
                key={index}
                className="w-[135px] h-[200px] bg-slate-300 animate-pulse rounded overflow-hidden shadow-lg"
              />
            ))          
          :
          data && data?.map((item)=>(
            <Cards  src={`${imagePath}/${item?.poster_path}`} key={item.id} alt={item?.name || item?.title}/>
          ))}
        </div>
        <PaginationBtn />
    </div>
  )
}

export default HomePage

