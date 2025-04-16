import { useState, createContext, useContext } from "react"


const PageContext = createContext()

function PaginationCxtProv({children}) {
    const [count, setCount] = useState(0)
    const [timeWindow, setimeWindow] = useState('day')

  return (
    <PageContext.Provider value={{count, setCount, timeWindow, setimeWindow}}>
        {children}
    </PageContext.Provider>
  )
}


export default PaginationCxtProv

export function usePages(){
    return useContext(PageContext)
}
