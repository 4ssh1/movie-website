import { Menu, icons } from "../../consts/NavbarConsts"
import { Link, useNavigate } from "react-router-dom"
import ThemeButton from './ThemeButton'
import { usePages } from "../../../utilities/context/ContextProvAll"
import { useState, useEffect } from "react"

 function MenuBar() {
   const [userPopUp, setUserPopUp] = useState(false)
   const {user, setUser, signInWithGoogle, logOut } = usePages()
   const navigate = useNavigate()


  function handlePopUp(icon) {
    if(icon.path !== "/search"){
      setUserPopUp(!userPopUp)
    }  
  }

  function navToWatchList(){
    setUserPopUp(false)
    navigate('/profile')
  }

  return (
    <div className="flex justify-center items-center gap-5">
      <div className="flex gap-3 sm:block relative">
        {Menu.map(menus=>(
          <span key={menus.title} className="sm:pl-6 pl-2 text-[13px] sm:text-lg">
            <Link to={menus.path}>{menus.title}</Link>
          </span>
        ))}
      </div>
        {icons.map((icon, index)=>(
          <Link key={index} to={icon.path}>
              <div onClick={()=>handlePopUp(icon)}>{icon.icon}</div>
          </Link>
        ))}

        <div className='absolute top-11 right-13 sm:right-20'>
          {
            userPopUp && 
            <div className='leading-5.5 text-[9px] bg-slate-400 sm:text-sm sm:leading-8 [&_p]:rounded-[8px] sm:[&_p]:rounded-[12px]
             [&_p]:hover:bg-slate-200 [&_p]:active:bg-slate-200 [&_p]:px-3 cursor-pointer rounded-[8px] sm:rounded-[12px] '>
              <p onClick={navToWatchList}>WatchList</p>
              <p>LogOut</p>
            </div>
          }
        </div>

      <div>
        <ThemeButton />
      </div>
    </div>
  )
}

export default MenuBar