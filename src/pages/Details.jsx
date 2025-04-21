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
        <Typography variant="caption" component="div" className="absolute left-2 text-white">
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

  }, [type, id])

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
            <div className=" relative h-[50vh] text-white">
              <div style={{
                background: data 
                ? `url(${imagePath}/${data?.backdrop_path})`
                : "",
              }} className={`w-full p-5 top-0 h-[40vh] bg-no-repeat left-0 bg-center px-5 bg-cover absolute`}></div>

                  <div className="flex backdrop-blur-sm w-full h-full ">
                      <div className="w-1/3">
                        <img src={`${imagePath}/${data?.poster_path}`} alt="" width={160}/>
                      </div>
                      <div className="flex flex-col justify-center w-2/3 gap-2">
                          <p className="paytone text-lg">{data?.original_title || data?.original_name} 
                            <span className="pl-2"> {new Date(data?.release_date || data?.last_air_date).getFullYear()}</span></p>
                          <p>{data?.original_country}</p>
                          <CircularRating value={(data?.vote_average * 10).toFixed(0)} />
                          <p className="text-xs line-clamp-6 leading-5">{data?.overview}</p>
                      </div>
                  </div>
              
              {/* year, age, limited series, spatial audio, chat , number of episodes */}
          </div>
          
      
      }
    </div>
  )
}

export default Details


