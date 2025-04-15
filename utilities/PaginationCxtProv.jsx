import { useState, createContext, useContext } from "react"


const PageContext = createContext()

function PaginationCxtProv({children}) {
    const [count, setCount] = useState(0)
    const [isDay, setIsDay] = useState(null)

  return (
    <PageContext.Provider value={{count, setCount, isDay, setIsDay}}>
        {children}
    </PageContext.Provider>
  )
}


export default PaginationCxtProv

export function usePages(){
    return useContext(PageContext)
}
