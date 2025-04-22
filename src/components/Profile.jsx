import { imagePath } from "../api/api"

function Profile({src}) {
  return (
      <div className="border-2 border-white sm:rounded-4xl sm:size-34 size-12  rounded-lg bg-[#f2f2f2] relative mt-3" >
        <div className="absolute top-0 w-full h-full left-0 sm:block bg-white sm:rounded-4xl rounded-lg opacity-10"></div>
        <img src={`${imagePath}/${src}`} alt="casts" className="sm:rounded-4xl rounded-lg  sm:size-30 size-10 bg-center bg-contain"/>
      </div>
  )
}

export default Profile
