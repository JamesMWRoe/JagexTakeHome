import Agent from "../Helpers/Agent";

interface MainGameProps
{
  agentToken: string;
  agent: Agent;
  setAgent: React.Dispatch<React.SetStateAction<Agent | undefined>>;
}

function Game(props: MainGameProps)
{
    return ( <div className="mainGame">
      <h1>Welcome {props.agent.symbol}</h1>
      <p>Credits: {props.agent.credits}</p>
      <p>Ship Count: {props.agent.shipCount}</p>
    </div> )
}

export default Game