import { useEffect, useState } from "react"
import PaginationBtn from "../consts/PaginationBtn"
import { fetchTrending, imagePath } from "../api/api"
import Cards from "../components/Card"
import Hero from "../components/Hero"

function HomePage() {
  const [data, setData] = useState([])

  useEffect(()=>{
    fetchTrending().then((res)=>{
      setData(res)
    }).catch(err=>console.log(err))
  }, [])

  console.log(data)

  return (
    <div className="relative min-h-screen w-full">
      <Hero />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-2 gap-2 place-items-center sm:px-30 py-10">
          {data && data?.map((item)=>(
            <Cards  src={`${imagePath}/${item?.poster_path}`} key={item.id} alt={item?.name || item?.title}/>
          ))}
        </div>
        <PaginationBtn />
    </div>
  )
}

export default HomePage

