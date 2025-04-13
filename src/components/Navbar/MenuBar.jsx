import { Menu, icons } from "../../consts/NavbarConsts"
import { Link } from "react-router-dom"

 function MenuBar() {
  return (
    <div className="pl-3">
      {Menu.map(menus=>(
        <span key={menus.title} className="pl-6">
          <Link to={menus.path}>{menus.title}</Link>
        </span>
      ))}
      {icons.map((icon, index)=>(
        <Link key={index} to={`${icon.path === "/search" && '/search'}`}>
          <span className="pl-3">{icon.icon}</span>
        </Link>
      ))}
    </div>
  )
}

export default MenuBar