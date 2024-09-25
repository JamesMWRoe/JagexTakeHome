import { useTokenContext } from "../Context/TokenContext";
import { SpaceTradeGet } from "../Helpers/APIRequests";

interface ShipyardProps {
  system: string;
  waypoint: string;
}

export default function Shipyard(props: ShipyardProps)
{
  const {agentToken} = useTokenContext();
  const LoadShipyard = async () => 
  {
    const resp = await SpaceTradeGet(`systems/${props.system}/waypoints/${props.waypoint}/shipyard`, agentToken);
    
    const json = await resp.json();

    if (resp.ok)
    {
      return(
      <span>
        {JSON.stringify(json, null, 2)}
      </span>
      )
    }
  }

  return(
    <>
      <h2>Shipyard</h2>
      {LoadShipyard()}
    </>
    
  )
}