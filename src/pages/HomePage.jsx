import { useEffect, useState } from "react"
import PaginationBtn from "../consts/PaginationBtn"
import { fetchTrending, imagePath } from "../api/api"
import Cards from "../components/Card"

function HomePage() {
  const [data, setData] = useState([])

  useEffect(()=>{
    fetchTrending().then((res)=>{
      setData(res)
    }).catch(err=>console.log(err))
  }, [])

  console.log(data)

  return (
    <div className="relative min-h-screen">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-2 gap-4 sm:px-30 py-10">
          {data && data?.map((item)=>(
            <Cards  src={`${imagePath}/${item?.poster_path}`} key={item.id} alt={item?.name}/>
          ))}
        </div>
        <PaginationBtn />
    </div>
  )
}

export default HomePage

