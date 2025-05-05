import { useState, useEffect } from "react"
import { firestore } from "../services/fireStore"
import { usePages } from "../context/ContextProvAll"
import Cards from "../components/Card"
import { imagePath } from "../api/api"

function ProfilePage() {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const skeletonArray = Array(10).fill(0)
  const {getWatchLists} = firestore()
  const {user} = usePages()
  const noImage = "noImage.jpg"


  useEffect(()=>{
    if(user?.uid) {
      getWatchLists(user.uid).then(res=>{
        setData(res)
        setLoading(false)
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    }
  }, [user?.id, getWatchLists])

  return (
    <div className="p-5">
      <p className="paytone text-2xl">WatchList </p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-around w-full place-items-center gap-5 py-10">
        {loading ? skeletonArray.map((_, index) => (
          <div
            key={index}
            className="w-[180px] h-[200px] bg-slate-300 animate-pulse rounded overflow-hidden shadow-lg"
            />
            ))
            :
            data && data?.map((item)=>(
            <Cards  src={!item?.poster_path ? noImage : `${imagePath}${item?.poster_path}`} key={item?.id}
            alt={item?.name || item?.title} type={item?.type} id={item?.id}/>
            ))}
          </div>
    </div>
  )
}

export default ProfilePage
