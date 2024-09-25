import '../Styles/App.css';
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
      <div className='newGame'>
        <NewGame setAgent={setAgent} />
        <LoadGame setAgent={setAgent} />
      </div>
      
    )  }
    
    return (
      <AgentContextProvider agent={agent} setAgent={setAgent}>
        <Game/>
      </AgentContextProvider>
    );

  }
  
  return (
    <>
    <h1 className="title">Space Trader</h1>
    <TokenContextProvider>
        {HandleGamePage()}
    </TokenContextProvider>
    </>
  );
}

export default App;
