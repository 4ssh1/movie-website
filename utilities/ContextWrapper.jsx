import PaginationCxtProv from "./PaginationCxtProv"

function ContextWrapper({children}) {
  return (
        <PaginationCxtProv>
            {children}
        </PaginationCxtProv>
  )
}

export default ContextWrapper
