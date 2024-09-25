import { Page } from "../Context/GamePageContext";
import NavLink from "./NavLink";

export default function NavBar()
{
  const pageArray: Array<Page> = ["Profile", "StarMap", "Contracts"];

  return (
    <nav>
      <ul id="navLinks">
        {pageArray.map(page => <NavLink pageName={page} />)}
      </ul>
    </nav>
  )
}