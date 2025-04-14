import { Menu, icons } from "../../consts/NavbarConsts"
import { Link } from "react-router-dom"
import ThemeButton from './ThemeButton'

 function MenuBar() {
  return (
    <div className="flex justify-center items-center gap-5">
      <div className="flex gap-3 sm:block">
        {Menu.map(menus=>(
          <span key={menus.title} className="sm:pl-6 pl-2 text-[13px] sm:text-lg">
            <Link to={menus.path}>{menus.title}</Link>
          </span>
        ))}
      </div>
        {icons.map((icon, index)=>(
          <Link key={index} to={`${icon.path === "/search" && '/search'}`}>
            <div>{icon.icon}</div>
          </Link>
        ))}
      <div>
        <ThemeButton />
      </div>
    </div>
  )
}

export default MenuBar