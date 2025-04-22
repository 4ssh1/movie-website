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
  const [data, setData] = useState([])

  useEffect(()=>{
    fetchDetails(type, id).then(res=>{
      setData(res)
    }).catch(err=>console.log(err)).finally(()=>{
      setLoading(false)
    })

  }, [])

  console.log(data)

  return (
    <div className="my-5">
      {loading ? 
        <div className="flex space-x-2 justify-center items-center h-screen">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.4s]"></div>
        </div>
          :

          data && 
            <div className=" relative h-[60vh] text-white ">
              <div style={{
                backgroundImage: data 
                ? `url(${imagePath}/${data?.backdrop_path})`
                : "",
              }} className={`w-full top-0 h-[59vh] bg-no-repeat left-0 bg-center px-5 bg-cover absolute`}></div>

                  <div className="flex backdrop-blur-xs w-full h-[60vh]">
                      <div className="w-1/3 pt-1 h-full pl-3 flex justify-center items-center">
                        <img src={`${imagePath}/${data?.poster_path}`} alt="" width={200}/>
                      </div>
                      <div className="flex flex-col justify-center w-2/3 gap-3 pr-10">
                          <p className="paytone text-3xl">{data?.original_title || data?.original_name} 
                            <span className="lato pl-5"> ( {new Date(data?.release_date || data?.last_air_date).getFullYear()} )</span>
                          </p>

                          <div>
                              <span> {new Date(data?.release_date || data?.last_air_date).toLocaleDateString()} </span>
                              <span className="text-sm bg-white text-black text-center p-1 ml-3 rounded-md">  {data?.origin_country} </span>
                              <span className="bg-black p-1 ml-3 rounded-md"> {data?.original_language?.toUpperCase()} </span>                           
                              <h3 className="paytone text-2xl leading-10">Overview</h3>
                              <p className="text-md line-clamp-6 leading-7">{data?.overview}</p>
                          </div>
                          <div className="flex ">
                            <CircularRating value={(data?.vote_average * 10).toFixed(0)} />
                            <button className="inline-block ml-10  text-center border-[1px] p-2 mb-5"><span>➕</span> Add to WatchList</button> 
                          </div>
                          <p>
                            {data?.genres.map(genre=>(
                              <button key={genre.id} className="border-[1px] ml-2 rounded-full px-2 lato cursor-none hover:bg-slate-900">
                                {genre.name}</button>
                            ))}
                          </p> 
                          <span className="text-sm text-white font-black hover:bg-slate-700 ease-in-out cursor-none
                           inline-block w-fit px-2 rounded-md border-[1px] backdrop-blur-md">{data?.status}</span>
                      </div>
                  </div>
              
              {/* year, age, limited series, spatial audio, chat , number of episodes */}
          </div>
          
      
      }
    </div>
  )
}

export default Details


