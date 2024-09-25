import { useAgentContext } from "../Context/AgentContext";
import StarMap from "./StarMap";

function Game()
{
  const {agent} = useAgentContext();

    return (
    <div className="mainGame">
      <nav>
        <ul id="navLinks">
          <li>StarMap</li>
          <li>Contracts</li>
          <li>Profile</li>
        </ul>
      </nav>
      <h1>Welcome {agent.symbol}</h1>
      <p>Credits: {agent.credits}</p>
      <p>Ship Count: {agent.shipCount}</p>

      <StarMap />
    </div> 
    );
}

export default Game