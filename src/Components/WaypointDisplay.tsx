import Waypoint from "../Helpers/Waypoint"
import { useGamePageContext } from "../Context/GamePageContext";
import { useShipyardContext } from "../Context/ShipyardContext";

type WaypointDisplayProps = {
  waypoint: Waypoint;
}

export default function WaypointDisplay(props: WaypointDisplayProps)
{
  const {setPage} = useGamePageContext();
  const {setShipyardWaypoint} = useShipyardContext();

  const EnterShipyard = () =>
  {
    setPage("Shipyard");
    setShipyardWaypoint({waypoint: props.waypoint.symbol, system: props.waypoint.systemSymbol});
  }

  return(
    <li key={props.waypoint.symbol} onClick={EnterShipyard}>Waypoint: {props.waypoint.symbol} | Type: {props.waypoint.type}</li>
  )
}