import { useEffect } from "react"
import { node } from "prop-types"
import { useNavigate } from "react-router-dom"
import { usePages } from "../context/ContextProvAll"

function ProtectedRoute({children}) {
  const {user} = usePages()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  if (!user) return null; 
  
    return <>{children}</>;
}

export default ProtectedRoute

ProtectedRoute.propTypes = {
  children: node.isRequired
}
