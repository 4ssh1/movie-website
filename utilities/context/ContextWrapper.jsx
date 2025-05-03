import ContextProvAll from "./ContextProvAll"

function ContextWrapper({children}) {
  return (
        <ContextProvAll>
            {children}
        </ContextProvAll>
  )
}

export default ContextWrapper
