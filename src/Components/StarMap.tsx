import { MouseEvent, useState } from "react";
import { useAgentContext } from "../Context/AgentContext";
import { useTokenContext } from "../Context/TokenContext";
import Waypoint from "../Helpers/Waypoint";
import { BASE_URL } from "../Helpers/Constants";

export default function StarMap()
{
  const {agentToken} = useTokenContext();
  const {agent} = useAgentContext();

  const [searchTrait, setSearchTrait] = useState('');
  const [waypoints, setWaypoints] = useState<Array<Waypoint>>([]);
  
  const renderShipyards = () =>
  {
    if (!waypoints)
    { return; }
    
    return (
      <ul>
        {waypoints.map(waypoint => (
          <li key={waypoint.symbol}>Waypoint: {waypoint.symbol} | Type: {waypoint.type}</li>
        ))}
      </ul>
    )
  }

  return (<>
    <h2>StarMap</h2>
    <form>
      <span>Search System: </span>
      <label htmlFor="traits">Select a trait to search for: </label>
      <select name="traits" id="traits" onChange={e => setSearchTrait(e.target.value)}>
        <option value="">trait</option>
        <option value="SHIPYARD">ShipYard</option>
      </select>
      <button onClick={HandleSearch}>Search</button>
    </form>
    {renderShipyards()}

  </>)

  async function HandleSearch(e: MouseEvent)
  {
    e.preventDefault()
    
    if (!searchTrait)
    {  return;  }
    const hq = agent.headquarters
    const hqArr = hq.split('-');
    const system = `${hqArr[0]}-${hqArr[1]}`;

    const resp = await fetch(`${BASE_URL}/systems/${system}/waypoints?traits=${searchTrait}`, {
      headers: {"Authorization" : `Bearer ${agentToken}`}
    });

    const json = await resp.json();

    if (resp.ok)
    {
      const waypointArray = json.data.map((waypoint: { symbol: never; type: never; traits: never; }) => ({
        symbol: waypoint.symbol,
        type: waypoint.type,
        traits: waypoint.traits
      }));

      setWaypoints(waypointArray);
      
    }
  }
}