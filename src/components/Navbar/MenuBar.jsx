import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Menu } from "../../consts/NavbarConsts"
import ThemeButton from './ThemeButton'
import { usePages } from "../../../utilities/context/ContextProvAll"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

 function MenuBar() {
   const [userPopUp, setUserPopUp] = useState(false)

  useEffect(()=>{
    function handleClick(event){
      // if(!)
    }
  }, [])

   const {user, setUser, signInWithGoogle, logOut } = usePages()
   const navigate = useNavigate()
   const icon = <AccountCircleIcon  className='text-xs'/>



   function navToWatchList(){
    setUserPopUp(false)
    navigate('/profile')
   }

  return (
    <div className="flex justify-center items-center gap-5">
      <div className="flex gap-3 sm:block relative">
        {Menu.map(menus=>(
          <span key={menus.title || menus.icon} className="sm:pl-6 pl-2 text-[13px] sm:text-lg">
            <Link to={menus.path}>{menus.title || menus.icon}</Link>
          </span>
        ))}
      </div>
        <div onClick={()=>setUserPopUp(!userPopUp)}>
          {icon}
        </div>
        <div className='absolute top-11 right-13 sm:right-17'>
          {
            userPopUp && 
            <div id={'toolTip'} className='leading-5.5 text-[9px] bg-slate-400 sm:text-sm sm:leading-8 [&_p]:rounded-[8px] sm:[&_p]:rounded-[12px]
             [&_p]:hover:bg-slate-200 [&_p]:active:bg-slate-200 [&_p]:px-3 cursor-pointer rounded-[8px] sm:rounded-[12px] '>
              <p onClick={navToWatchList}>WatchList</p>
              <p>Logout</p>
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