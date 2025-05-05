import { useState, useEffect } from "react";
import { fetchTrending, imagePath } from "../api/api";
import { usePages } from "../context/ContextProvAll";

function Hero() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);
  const {timeWindow} = usePages()

  useEffect(() => {
    fetchTrending(timeWindow)
      .then((res) => setData(res?.results))
      .catch((err) => console.log(err));
  }, [timeWindow]);

  useEffect(() => {
    if (data.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 6000); // background changes every 6 seconds

    return () => clearInterval(interval);
  }, [data]);

  const movie = data[index];

  return (
    <div className="w-full lg:h-[50vh] h-[25vh]
     relative mt-5 rounded-lg overflow-hidden md:h-[37vh]">
      <div
        className={`w-full lg:h-[50vh] h-[25vh] md:h-[37vh] bg-cover bg-center transition-all duration-1000 ease-in-out absolute ${
          movie ? `` : "bg-slate-300 animate-pulse rounded overflow-hidden shadow-lg"
        }`}
        style={{
          backgroundImage: movie ? `url(${imagePath}/${movie?.backdrop_path})` : "",
        }}
      ></div>

      <div className="w-full lg:h-[50vh] h-[25vh] md:h-[37vh] backdrop-blur-md absolute"></div>

      {movie && (
        <div className="text-white sm:p-8 p-2 flex justify-between items-center animate-fade-text absolute w-full h-full gap-5">
          <div className="w-2/5 lg:w-1/2">
            <h1 className="sm:text-4xl text-sm paytone font-bold mb-4">
              {movie?.title || movie?.name}
            </h1>
            <p className="sm:text-[16px] text-xs lato sm:max-w-2/3 line-clamp-3">
              {movie?.overview}
            </p>
          </div>
          <div className="w-3/5 lg:w-1/2 ">
            <img
              src={`${imagePath}/${movie?.backdrop_path}`}
              alt={`${movie?.title || movie?.name}-img`}
              className="rounded lg:rounded-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
