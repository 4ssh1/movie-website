import { node } from "prop-types"
import { useNavigate } from "react-router-dom"
import { usePages } from "../context/ContextProvAll"

function ProtectedRoute({children}) {
  const {user} = usePages()
  const navigate = useNavigate()
  return (
    <>
      {user ? children : navigate('/')}
    </>
  )
}

export default ProtectedRoute

ProtectedRoute.propTypes = {
  children: node.isRequired
}
