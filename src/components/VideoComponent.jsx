import PropTypes from "prop-types"

function VideoComponent({id, title, height}) {
  return (
    <iframe  className={`w-full ${height}`}       
    src={`https://www.youtube.com/embed/${id}`} 
        title={title} >
    </iframe>
  )
}

VideoComponent.PropTypes = {
  id: PropTypes.string.isRequired,
  small: PropTypes.bool
}

export default VideoComponent
