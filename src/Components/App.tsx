import "./App.css";
import NewGame from "./NewGame";
import Game from "./Game";
import { TokenContextProvider } from "../Context/TokenContext";
import AgentContextProvider from "../Context/AgentContext";
import { useState } from "react";
import Agent from "../Helpers/Agent";
import LoadGame from "./LoadGame";

function App() 
{
  const [agent, setAgent] = useState<Agent | undefined>(undefined);

  const HandleGamePage = () =>
  {
    console.log(`Agent: ${agent}`);
    
    if (!agent)
    {  return (
      <>
        <NewGame setAgent={setAgent} />
        <LoadGame setAgent={setAgent} />
      </>
      
    )  }
    
    return (
      <AgentContextProvider agent={agent} setAgent={setAgent}>
        <Game/>
      </AgentContextProvider>
    );

  }
  
  return (
    <>
    <TokenContextProvider>
        <h1>STQS</h1>
        {HandleGamePage()}
    </TokenContextProvider>
    </>
  );
}

export default App;
