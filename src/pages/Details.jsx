import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchDetails, imagePath } from "../api/api"

import { CircularProgress, Box, Typography } from '@mui/material';

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
        <Typography variant="caption" component="div" className="absolute left-2 top-2.5 text-white">
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}


function Details() {
  const router = useParams()
  const {id, type} = router

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])

  useEffect(()=>{ 
    fetchDetails(type, id).then(res=>{
      setData(res)
      setLoading(false)
    }).catch(err=>console.log(err))
    
  }, [])
  
  console.log(data)

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
            <div className=" relative sm:h-[70vh] h-[55vh] text-white ">
              <div style={{
                backgroundImage: data 
                ? `url(${imagePath}/${data?.backdrop_path})`
                : "",
              }} className={`w-full top-0 sm:h-[69vh] h-[55vh] bg-no-repeat left-0 bg-center px-5 bg-cover absolute`}></div>
              <div className="absolute top-0 left-0 bg-slate-900 opacity-50 w-full sm:h-[69vh] h-full"></div>

                  <div className="flex backdrop-blur-xs w-full sm:h-[69vh] h-[55vh] gap-5">
                      <div className="w-1/3 pt-1 h-full pl-3 flex justify-center items-center">
                        <img src={`${imagePath}/${data?.poster_path}`} alt="" className="w-[150px] sm:w-[250px]"/>
                      </div>
                      <div className="flex flex-col justify-center w-2/3 sm:gap-3 gap-1.5 sm:pr-10 ">
                          <p className="paytone sm:text-3xl text-[16px]">{data?.original_title || data?.original_name} 
                            <span className="lato pl-5 "> ( {new Date(data?.release_date || data?.last_air_date).getFullYear()} )</span>
                          </p>
                          <div>
                              <span className="text-xs sm:text-sm"> {new Date(data?.release_date || data?.last_air_date)?.toLocaleDateString()} </span>
                              <span className="sm:text-sm text-xs bg-white text-black text-center sm:p-1 p-0.5 ml-3 rounded-md">  {data?.origin_country} </span>
                              <span className="bg-black sm:p-1 p-0.5 ml-3 rounded-md sm:text-sm text-xs"> {data?.original_language?.toUpperCase()} </span>                           
                              <h3 className="paytone sm:text-2xl sm:leading-10 leading-7">Overview</h3>
                              <p className="sm:text-md text-xs line-clamp-6 sm:leading-7">{data?.overview}</p>
                          </div>
                          <div className="flex ">
                            <CircularRating value={(data?.vote_average * 10).toFixed(0)} />
                            <button className="inline-block sm:ml-10 ml-5 text-center border-[1px] p-2 sm:text-sm text-xs  mb-5"><span> ➕ </span> Add to WatchList</button> 
                          </div>
                          <p>
                            {data?.genres?.map(genre=>(
                              <button key={genre.id} className="border-[1px] ml-2 text-xs sm:text-sm rounded-full px-2 lato cursor-none hover:bg-slate-900">
                                {genre.name}</button>
                            ))}
                          </p> 
                          <span className="sm:text-sm text-white font-black hover:bg-slate-700 ease-in-out cursor-none
                           inline-block w-fit px-2 rounded-md border-[1px] backdrop-blur-md text-xs ">{data?.status}</span>
                      </div>
                  </div>
              
              {/* year, age, limited series, spatial audio, chat , number of episodes */}
          </div>
          
      
      }
    </div>
  )
}

export default Details


