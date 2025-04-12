import DynamicBar from "./DynamicBar"
import MenuBar from "./MenuBar"
import ThemeButton from "./ThemeButton"

function Navbar() {
  return (
    <div className="w-full px-10 paytone">
        <div className="flex justify-end items-center p-2">
          <MenuBar />
          <ThemeButton />
        </div>
        <div>
          <DynamicBar />
        </div>
    </div>
  )
}

export default Navbar
