import { useState } from "react";
import { useShipyardContext } from "../Context/ShipyardContext";


export default function Shipyard()
{
  const {shipyardWaypoint} = useShipyardContext();

  const [resp, setResp] = useState('')

  const LoadShipyard = async () => 
  {
    const resp = await fetch(`https://api.spacetraders.io/v2/systems/${shipyardWaypoint.system}/waypoints/${shipyardWaypoint.waypoint}/shipyard`, {
      headers: {
        "Accept" : "application/json"
      }
    });
    
    const json = await resp.json();

    setResp(JSON.stringify(json, null, 2));
  }

  LoadShipyard();

  return(
    <>
      <h2>Shipyard</h2>
      <pre>response: {resp}</pre>
    </>
    
  )
}