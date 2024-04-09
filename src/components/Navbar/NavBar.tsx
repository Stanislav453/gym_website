import { Link } from "react-router-dom"
import { NavBarData } from "./NavBarData"

export const NavBar = () => {
  return (
    <nav className="flex items-center">
      <ul className="flex flex-row gap-4">
        {
          NavBarData.map( ( navItem, key ) => {{
            return (
              <li>
                <Link key={key} to={ `/${navItem}` } >{navItem}</Link>
              </li>
            )
          }} )
        }
      </ul>
    </nav>
  )
}
