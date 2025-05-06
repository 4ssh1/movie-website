import { useState, useEffect } from "react"
import { firestore } from "../services/fireStore"
import { usePages } from "../context/ContextProvAll"
import Cards from "../components/Card"
import { imagePath } from "../api/api"
import { CiBookmarkRemove } from "react-icons/ci";

function ProfilePage() {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const skeletonArray = Array(10).fill(0)
  const {getWatchLists, removeFromWatchList} = firestore()
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

  function removeWatchList(e, item){
    e.preventDefault()
    removeFromWatchList(user?.uid, item.id).then(()=>{
      setData((prev)=>{
        prev?.filter(pre=>pre.id !== item.id)
      })
    })
  }

  return (
    <div className="p-5 min-h-screen">
      <p className="paytone text-2xl">WatchList </p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-around w-full place-items-center gap-5 py-10">
        {loading ? skeletonArray.map((_, index) => (
          <div
            key={index}
            className="w-[180px] h-[200px] bg-slate-300 animate-pulse rounded overflow-hidden shadow-lg"
            />
            ))
            :
            data && data.length > 0  ? data?.map((item)=>(
            <div key={item.id} className="relative">
              <Cards  src={!item?.poster_path ? noImage : `${imagePath}${item?.poster_path}`} key={item?.id}
              alt={item?.name || item?.title} type={item?.type} id={item?.id}/>
              <CiBookmarkRemove className="absolute top-0 text-red-500 bg-black rounded-full size-5.5 hover:opacity-50" onClick={(e)=>removeWatchList(e, item)}/>
            </div>
            ))

            :

            <p>No watchlist added</p>
          
          }
            
          </div>
    </div>
  )
}

export default ProfilePage
