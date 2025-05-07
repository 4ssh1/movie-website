import { useState, useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Menu } from "../../consts/NavbarConsts"
import ThemeButton from './ThemeButton'
import { usePages } from "../../context/ContextProvAll"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar } from "@mui/material"

 function MenuBar() {
   const [userPopUp, setUserPopUp] = useState(false)
   const [name, setName] = useState(null)
   const toolTipRef = useRef(null)
   const buttonRef = useRef(null)
   
   const {user, signInWithGoogle, logOut } = usePages()
   const navigate = useNavigate()
   const icon = <AccountCircleIcon  className='text-xs'/>

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
  
  useEffect(()=>{
    if(!user) return
    const userName = user.displayName.split(' ')
    const initials = userName[0][0] +  userName[1][0]
    setName(initials)
    console.log('name', name)
  }, [user])


   
   function navToWatchList(){
     setUserPopUp(false)
     navigate('/profile')
    }
    
    async function handleLogin(){
      try {
      await signInWithGoogle()
      setInitials()
      console.log('success')
    } catch (error) {
      console.log('error', error)
    }
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
                <Avatar sx={{ width: 30, height: 30, fontSize:"13px", backgroundColor:"black", color:'white' }} >{name && name} </Avatar>   
              </div>
              <div className='absolute top-8 -left-6 z-10 backdrop-blur-xs'>
                {
                  userPopUp && 
                  <div ref={toolTipRef} className=' bg-slate-400 dark:[&_p]:hover:bg-slate-800 text-sm leading-8 [&_p]:rounded-[8px] sm:[&_p]:rounded-[12px]
                [&_p]:hover:bg-slate-200 dark:bg-slate-500 [&_p]:active:bg-slate-200  [&_p]:px-3 cursor-pointer rounded-[8px] sm:rounded-[12px] '>
                    <p onClick={navToWatchList}>WatchList</p>
                    <p onClick={logOut}>Logout</p>
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