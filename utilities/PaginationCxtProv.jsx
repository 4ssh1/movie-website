import { useState, createContext, useContext, useMemo } from "react"


const PageContext = createContext()

function PaginationCxtProv({children}) {
    const [count, setCount] = useState(1)
    const [timeWindow, setimeWindow] = useState('day')
    const [totalPages, setTotalPages] = useState(1)


    const contextValue = useMemo(() => ({
      count,
      setCount,
      timeWindow,
      setimeWindow,
      totalPages,
      setTotalPages,
    }), [count, timeWindow, totalPages]);

  return (
    <PageContext.Provider value={contextValue}>
        {children}
    </PageContext.Provider>
  )
}


export default PaginationCxtProv

export function usePages(){
    return useContext(PageContext)
}
