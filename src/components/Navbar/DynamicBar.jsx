import { useState } from "react"
import { useLocation } from "react-router-dom"

const homeSection = {
        title:  "trending",
        buttons: [
            "Today", "This week"
        ]
    }

const movieSection = {
        title:  "discover movies",
        buttons: ["Popular", "Top Rated"]
    }

const tvShowsSection = {
        title: 'discover tv shows',
        buttons: ["Popular", "Top Rated"]
    }

function DynamicBar() {
  const location = useLocation()
  const currentPath = location.pathname
  const [selectButton, setSelectedButton] = useState("Today")
  const [selectedMovies, setSelectedMovies] = useState("")
  const [selectedShows, setSelectedShows] = useState('')
    
  return (
    <div>
      {currentPath === "/" && (
        <div>
          <div className="font-bold text-2xl">{homeSection.title.toUpperCase()}</div>
          <div className="border-[1px] inline-flex px-1 py-[0.4px] border-slate-600 rounded-2xl gap-1 mt-3">
            {homeSection.buttons.map(button => (
              <button key={button} onClick={()=>setSelectedButton(button)} 
              className={`${selectButton === button ? "bg-slate-500" 
                :
                 "bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100"}
               px-3 py-0.5 rounded-2xl transition cursor-pointer font-medium focus:outline-0 text-sm`}>
                {button}</button>
            ))}
          </div>
        </div>
      )}

      {currentPath === "/movies" && (
        <div>
          <div className="font-bold text-2xl">{movieSection.title.toUpperCase()}</div>
          <div>
            <select value={selectedMovies} onChange={(e) => setSelectedMovies(e.target.value)}
              className="border-[1px] rounded-2xl px-1 py-1 outline-0 text-sm font-medium mt-3">
              {movieSection.buttons.map(btn => (
                <option key={btn} value={btn}>
                  {btn}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {currentPath === "/shows" && (
        <div>
          <div className="font-bold text-2xl"
          >{tvShowsSection.title.toUpperCase()}</div>
          <div>
            <select value={selectedShows} onChange={(e) => setSelectedShows(e.target.value)}
              className="border-[1px] rounded-2xl px-1 py-1 outline-0 text-sm font-medium mt-3">
              {tvShowsSection.buttons.map(btn => (
                <option key={btn} value={btn}>
                  {btn}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  )
}

export default DynamicBar
