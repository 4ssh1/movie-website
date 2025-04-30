import { useState, useEffect } from "react"
import { fetchDiscover, imagePath } from "../../api/api"


function MovieHero() {
const [data, setData] = useState([])
const [index, setIndex] = useState(0)
const [loading, setLoading] = useState(true)


useEffect(()=>{
  fetchDiscover("movie").then(res=>{
    console.log(res)
    setData(res?.results)
    setLoading(false)
  }).catch(err=>{
    console.log(err)
  })
}, [])

useEffect(() => {
  if (data.length === 0) return;

  const interval = setInterval(() => {
    setIndex((prevIndex) => (prevIndex + 1) % data.length);
  }, 6000); // background changes every 6 seconds

  return () => clearInterval(interval);
}, [data]);

const movie = data[index];



  return (
    <div className="w-full sm:h-[50vh] h-[30vh]
     relative mt-5 rounded-lg overflow-hidden">
      <div
        className={`w-full sm:h-[50vh] h-[30vh] bg-cover bg-center transition-all duration-1000 ease-in-out absolute ${
          movie ? `` : "bg-slate-300 animate-pulse rounded overflow-hidden shadow-lg"
        }`}
        style={{
          backgroundImage: movie ? `url(${imagePath}/${movie?.backdrop_path})` : "",
        }}
      ></div>

      <div className="w-full sm:h-[50vh] h-[30vh] backdrop-blur-md absolute"></div>

      {movie && (
        <div className="text-white p-8 flex justify-center animate-fade-text absolute w-full h-full">
          <div className="w-2/3 sm:pt-10 pr-2">
            <h1 className="sm:text-4xl text-sm paytone font-bold mb-4">
              {movie?.title || movie?.name}
            </h1>
            <p className="sm:text-sm text-xs lato sm:max-w-2/3 line-clamp-3">
              {movie?.overview}
            </p>
          </div>
          <div className="sm:w-1/3 w-56 pt-10">
            <img
              src={`${imagePath}/${movie?.backdrop_path}`}
              alt={`${movie?.title || movie?.name}-img`}
              className="rounded"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default MovieHero
