import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { FaRegClock } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import { CircularProgress, Box, Typography, Alert, Snackbar } from '@mui/material';
import { fetchDetails, imagePath, fetchCredits, fetchVideos} from "../api/api"
import VideoComponent from "../components/VideoComponent";
import Profile from "../components/Profile";
import { usePages } from "../context/ContextProvAll";
import { firestore } from "../services/fireStore";

function CircularRating({ value }) {
  return (
    <Box position="relative" display="inline-flex" className="relative">
      <CircularProgress
        variant="determinate"
        value={value}
        size={40}
        thickness={6}
        sx={{
          color: value >= 7 ? 'green' : value >= 4 ? 'orange' : 'red',
        }}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" className="absolute left-2 top-2.5 text-white ">
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}


function Details() {
  const router = useParams()
  const {id, type} = router
  const {user} = usePages()
  const clock = <FaRegClock />
  const noImage = "noImage.jpg"

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])
  const [credits, setCredits] = useState([])
  const [videos, setVideos] = useState([])
  const [trailer, setTrailer] = useState(null)
  const [open, setOpen] = useState(false)
  const [inWatchList, setInWatchList] = useState(false)
  const { addToWatchList, isDatainWatchList, removeFromWatchList} = firestore()

  useEffect(()=>{ 
    const controller = new AbortController()
    Promise.all([
      fetchDetails(type, id, controller.signal),
      fetchCredits(type, id, controller.signal),
      fetchVideos(type, id, controller.signal)
    ]).then(([detailsRes, creditsRes, videosRes])=>{
      setData(detailsRes)
      setCredits(creditsRes?.cast?.slice(0, 7))
      setVideos(videosRes?.results?.filter(videos => videos !== "Trailer")?.slice(0, 10))
      const trailer = videosRes?.results?.find(video=> video?.type === "Trailer")
      setTrailer(trailer)
      setLoading(false)
    }).catch(err =>{
      if(err.name !== 'AbortError'){
        console.error(err)
      }
    })
    
    return ()=> controller.abort()
  }, [])
  

  // useEffect(()=>{
  //   if(loading){
  //     const timeOut = setTimeout(() => {
  //       setError(true)
  //     }, 1000);
  
  //     return () => {clearTimeout(timeOut); setError(false)}
  //   }

  // }, [loading])
  

  useEffect(() => {
    let errorTimeout;
    let clearErrorTimeout;
  
    if (loading) {
      errorTimeout = setTimeout(() => {
        setError(true);
  
        clearErrorTimeout = setTimeout(() => {
          setError(false);
        }, 10000);
  
      }, 20000);
    }
  
    return () => {
      clearTimeout(errorTimeout);
      clearTimeout(clearErrorTimeout);
    };
  }, [loading]);

  useEffect(()=>{
    if (!user){
      setInWatchList(false)
    }
    isDatainWatchList(user?.uid, id).then(data=>{
      setInWatchList(data)
    })
  },[user, id])


  function handleClose(){
    setOpen(false)
  }

  async function handleAddToWatchList(){
    if(user){
      const watchListData = {
        id: data?.id,
        name: data?.original_title || data?.original_name,
        poster_path: data?.poster_path,
        release_date: data?.release_date || data?.last_air_date,
        type: type,
        overview: data?.overview
      }
      // addDocToFireStore("watch_lists", watchListData)
      const dataString = data?.id.toString()
      await addToWatchList(user?.uid, dataString, watchListData)
      const watchList = await isDatainWatchList(user?.uid, dataString)
      setInWatchList(watchList)
      setOpen(true)
      }
      setOpen(true)
  }

  async function handleRemoveFromWatchList() {
    await removeFromWatchList(user?.uid, id)
    const watchList = await isDatainWatchList(user?.uid, id)
    setInWatchList(watchList)
  }
  
 

  return (
    <div className="my-5">
      {loading ? 
        <div className="h-screen flex flex-col justify-center items-center gap-5">
          <div className="flex space-x-2 justify-center items-center">
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.4s]"></div>
          </div>
            {error && <p className="text-red-600 text-lg">Network Error, check network connection</p>}
        </div>
         
          :

          data && 
            <div>
              <div className="sm:h-[70vh] h-[50vh] text-white relative">
                <div style={{
                  backgroundImage: data
                  ? `url(${imagePath}/${data?.backdrop_path})`
                  : "",
                }} className={`w-full top-0 sm:h-[69vh] h-[50vh] bg-no-repeat left-0 bg-center px-5 bg-cover absolute`}></div>
                <div className="absolute top-0 left-0 bg-slate-900 opacity-50 w-full sm:h-[69vh] h-full"></div>
                    <div className="flex backdrop-blur-xs w-full sm:h-[69vh] h-[50vh] sm:gap-5 pr-2.5 sm:pr-0 ">
                        <div className="sm:w-1/3 w-15 pt-1 h-full pl-3 flex justify-center items-center">
                          <img src={`${imagePath}${data?.poster_path}`} alt="" className="w-0 sm:w-[250px]"/>
                        </div>
                        <div className="flex flex-col justify-center w-full sm:w-2/3 sm:gap-3 gap-2 sm:pr-10 ">
                            <p className="paytone sm:text-3xl text-[12px]">{data?.original_title || data?.original_name}
                              <span className="lato pl-5 "> 
                                ( {new Date(data?.release_date || data?.last_air_date).getFullYear()} )
                              </span>
                            </p>
                            <div>
                                <span className="text-xs sm:text-sm"> 
                                  {new Date(data?.release_date || data?.last_air_date)?.toLocaleDateString()} </span>
                                <span className="sm:text-sm text-[9px] bg-white text-black text-center sm:p-1 p-0.5 ml-3 rounded-md"> 
                                   {data?.origin_country} </span>
                                <span className="flex items-center gap-4 pt-0.5 sm:text-sm text-[9px]">
                                {/* data?.number_of_seasons} seasons` || data?.runtime} */}
                                  {clock }{`${type === "movie" ? (data?.runtime / 60).toFixed(1) + " hours" :
                                     data?.number_of_seasons + " seasons"}`
                                  } 
                                </span>
                                <h3 className="paytone sm:text-2xl text-[9px] sm:leading-10 leading-7">Overview</h3>
                                <p className="sm:text-sm text-[9px] tracking-wider line-clamp-6 sm:leading-5">{data?.overview}</p>
                            </div>
                            <div className="flex ">
                              <CircularRating value={(data?.vote_average * 10).toFixed(0)} />
                              <button
                              className="inline-block sm:ml-10 ml-6 text-center border p-2 sm:text-sm text-[9px] mb-5 rounded-sm"
                              
                            >
                              {inWatchList ? (
                                <span className="inline-flex items-center gap-1 hover:opacity-70" onClick={handleRemoveFromWatchList}>
                                  <GrStatusGood /> Added to WatchList
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 hover:opacity-70" onClick={handleAddToWatchList}>
                                  ➕ Add to WatchList
                                </span>
                              )}
                            </button>

                              
                            </div>
                            <p>
                              {data?.genres?.map(genre=>(
                                <button key={genre.id} className="border-[1px] ml-2 text-[9px] sm:text-sm rounded-full 
                                px-2 py-0.5 mb-2 lato cursor-none hover:bg-slate-900">
                                  {genre.name}</button>
                              ))}
                            </p>
                            <span className="sm:text-sm text-white font-black hover:bg-slate-700 ease-in-out cursor-none
                             inline-block w-fit px-2 rounded-md border-[1px] backdrop-blur-md text-[9px]">{data?.status}</span>
                        </div>
                    </div>
                    <Snackbar
                    open={open}
                    autoHideDuration={3000} // 3 seconds
                    onClose={handleClose}
                    >
                      {!user ? 
                      <Alert severity="error">Login to save to WatchList.</Alert> 
                      : 
                      <Alert severity="success">Watchlist added.</Alert>
                      }
                  </Snackbar>
              </div>
              {/* year, age, limited series, spatial audio, chat , number of episodes */}
                  <div>
                    <h3 className="text-center sm:my-5 my-2 font-bold text-lg">CAST</h3>
                    <div className="flex sm:gap-10 gap-3 sm:justify-center items-center overflow-x-scroll hide-scrollbar">
                      {credits && credits?.map(credit=>(
                        <div key={credit?.id} className="text-center">
                          <Profile src={!credit?.profile_path ? noImage : `${imagePath}${credit?.profile_path}`}/>
                          <p className="sm:text-xs text-[5px] pt-2 lato">{credit.name} </p>
                          <p className="sm:text-xs text-[5px] ">as <span className="font-medium">{credit.character}</span></p>
                        </div>
                      ))}
                    </div>
                    <h3 className="sm:my-8 my-3 text-center font-bold">VIDEOS</h3>
                    <VideoComponent id={trailer?.key} title={trailer?.name} height={'h-[200px] sm:h-[500px]'}/>
                    <div className="my-8 flex gap-6 overflow-x-scroll hide-scrollbar w-full">
                      {videos && videos?.map(video=>(
                        <div key={video?.id} className="flex-shrink-0 ">
                          <VideoComponent id={video?.key} title={video?.name} height={'h-[200px]'}/>
                          <p className="text-xs font-black roboto text-center my-1">{video?.name}</p>
                        </div>
                        
                      ))}
                    </div>
                  </div>
            </div>

        }
              </div>
  )
}

export default Details


