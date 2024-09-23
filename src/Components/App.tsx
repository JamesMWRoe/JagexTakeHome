import "./App.css";
import NewGame from "./NewGame";
import { useState } from "react";
import Agent from "../Helpers/Agent";
import Game from "./Game";

function App() 
{
  const [agentToken, setAgentToken] = useState('');
  const [agent, setAgent] = useState<Agent | undefined>(undefined)

  function HandleGamePage()
  {
    if (!agent)
    {  return <NewGame agentToken={agentToken} setAgentToken={setAgentToken} setAgent={setAgent} />  }
    
    return <Game agentToken={agentToken} agent={agent} setAgent={setAgent} />
  }
  
  return (
    <>
      <h1>STQS</h1>
      {HandleGamePage()}
    </>
  );
}

export default App;
