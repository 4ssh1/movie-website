import { useState, useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Menu } from "../../consts/NavbarConsts"
import ThemeButton from './ThemeButton'
import { usePages } from "../../../utilities/context/ContextProvAll"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar } from "@mui/material"

 function MenuBar() {
   const [userPopUp, setUserPopUp] = useState(false)
   const toolTipRef = useRef(null)
   const buttonRef = useRef(null)

  useEffect(()=>{
    function handleClickOutside(event){
      if(
        toolTipRef.current && !toolTipRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ){
        setUserPopUp(false)
      }
    }

    if(userPopUp){
      document.addEventListener('click', handleClickOutside)
    }

    return ()=>{
      document.removeEventListener('click', handleClickOutside)
    }

  }, [userPopUp])

   const {user, setUser, signInWithGoogle, logOut } = usePages()
   const navigate = useNavigate()
   const icon = <AccountCircleIcon  className='text-xs'/>



   function navToWatchList(){
    setUserPopUp(false)
    navigate('/profile')
   }

   function handleLogin(){

   }

   function getUserIcon(name){
    let hash = 0
    let i 
    let color = '#'

    for (i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash)
      // charCodeAt returns a number for each letter, hash varies based on the previous input
    }

    for(i = 0; i < 3; i++){
      const value = (hash >> (i * 8)) && 0xff
      color += `00${value.toString(16)}`.slice(-2)
    }

    return color
   }

   function stringAvatar(name) {
    return {
      sx: {
        bgcolor: getUserIcon(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <div className="flex justify-center items-center gap-5">
      <div className="flex gap-3 sm:block ">
        {Menu.map(menus=>(
          <span key={menus.title || menus.icon} className="sm:pl-6 pl-2 text-[13px] sm:text-lg">
            <Link to={menus.path}>{menus.title || menus.icon}</Link>
          </span>
        ))}
      </div>
       { user ?
        
            <div className="relative">
              <div onClick={()=>setUserPopUp(!userPopUp)} ref={buttonRef}>
                <Avatar {...stringAvatar(user)}/>
              </div>
              <div className='absolute top-8 -left-6 z-10 backdrop-blur-xs'>
                {
                  userPopUp && 
                  <div ref={toolTipRef} className='leading-5.5 text-[9px] bg-slate-400 sm:text-sm sm:leading-8 [&_p]:rounded-[8px] sm:[&_p]:rounded-[12px]
                [&_p]:hover:bg-slate-200 [&_p]:active:bg-slate-200 [&_p]:px-3 cursor-pointer rounded-[8px] sm:rounded-[12px] '>
                    <p onClick={navToWatchList}>WatchList</p>
                    <p>Logout</p>
                  </div>
                }
              </div>
            </div>
          :

            <div onClick={handleLogin}>
              {icon}
            </div>
        }

      <div>
        <ThemeButton />
      </div>
    </div>
  )
}

export default MenuBar        