import { useState, createContext, useContext } from "react"


const PageContext = createContext()

function PaginationCxtProv({children}) {
    const [count, setCount] = useState(0)

  return (
    <PageContext.Provider value={{count, setCount}}>
        {children}
    </PageContext.Provider>
  )
}


export default PaginationCxtProv

export function setCount(){
    return useContext(PageContext)
}
