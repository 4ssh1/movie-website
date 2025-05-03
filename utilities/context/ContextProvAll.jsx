import { useState, createContext, useContext, useMemo, useEffect } from "react"
import { auth } from "../../services/firebase"
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"
import PropTypes from "prop-types"


const PageContext = createContext()

function ContextProvAll({children}) {
    const [count, setCount] = useState(1)
    const [timeWindow, setimeWindow] = useState('day')
    const [totalPages, setTotalPages] = useState(1)
    const [user, setUser] = useState(null)


    const contextValue = useMemo(() => ({
      count,
      setCount,
      timeWindow,
      setimeWindow,
      totalPages,
      setTotalPages,
      user,
      setUser,
      signInWithGoogle,
      logOut
    }), [count, timeWindow, totalPages, user]);

    useEffect(()=>{
      onAuthStateChanged(auth, (currentUser)=>{
        if (currentUser){
          setUser(currentUser)
        }else{
          setUser(false)
        }
      })
    }, [])

    function signInWithGoogle(){
      const provider = new GoogleAuthProvider();
      return signInWithPopup(auth)
    }

    function logOut(){
      return signOut(auth)
    }

  return (
    <PageContext.Provider value={contextValue}>
        {children}
    </PageContext.Provider>
  )
}

export function usePages(){
    return useContext(PageContext)
}

export default ContextProvAll

ContextProvAll.propTypes = {
  children: PropTypes.node.isRequired
}