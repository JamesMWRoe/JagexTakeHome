import "../Styles/NavLink.css"
import { Page, useGamePageContext } from "../Context/GamePageContext";

interface NavLinkProps {
  pageName: Page;
}

export default function NavLink (props: NavLinkProps)
{
  const {setPage} = useGamePageContext();

  return (
    <li key={props.pageName} onClick={() => setPage(props.pageName)}>{props.pageName}</li>
  )
}