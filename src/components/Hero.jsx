import { useState, useEffect } from "react";
import { fetchTrending, imagePath } from "../api/api";

function Hero() {
  const [index, setIndex] = useState(0);
  const [fadeText, setFadeText] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchTrending()
      .then((res) => {
        setData(res);
        setFadeText(true); // fade in after data loads
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeText(false); // fade out current text
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % data.length);
        setFadeText(true); // fade in next text
      }, 5000); // Increased time before switching movie
    }, 7000); // Increased interval to show text longer

    return () => clearInterval(interval);
  }, [data.length]);

  const movie = data[index];

  return (
    <div className="w-full h-[50vh] border-none rounded-lg relative mt-5 ">
      <div
        className="w-full h-[50vh] bg-cover bg-center transition-all bg-no-repeat duration-600 ease-in-out absolute"
        style={{
          backgroundImage: movie ? `url(${imagePath}/${movie?.backdrop_path})` : "none",
        }}
      ></div>
      <div
        className="w-full h-[50vh] bg-cover bg-center transition-all bg-no-repeat duration-600 ease-in-out backdrop-blur-md absolute"
      ></div>

      {movie && (
        <div
          className={`text-white p-8 transition-opacity duration-1000 ${
            fadeText ? "opacity-100" : "opacity-0"
          } flex justify-center`}
        >
          <div className="w-2/3 pt-10">
            <h1 className="text-4xl paytone font-bold mb-4">{movie?.title || movie?.name}</h1>
            <p className="text-sm lato max-w-2/3 text-ellipsis
              line-clamp-3">{movie?.overview}</p>
          </div>
          <div className="w-1/3 pt-10">
            <img
              src={`${imagePath}/${movie?.backdrop_path}`}
              alt={`${movie?.title || movie?.name}-img`}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
