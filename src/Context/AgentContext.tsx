import { createContext, useContext } from "react";
import Agent from "../Helpers/Agent";

type AgentContext = {
  agent: Agent;
  setAgent: React.Dispatch<React.SetStateAction<Agent | undefined>>;
}

type AgentContextProps = {
  children: React.ReactNode;
  agent: Agent;
  setAgent: React.Dispatch<React.SetStateAction<Agent | undefined>>;
}


const AgentContext = createContext<AgentContext | null>(null)

export default function AgentContextProvider({ children, agent, setAgent }: AgentContextProps)
{
  return(
    <AgentContext.Provider value={{agent, setAgent}}>
      {children}
    </AgentContext.Provider>
  );
}

export function useAgentContext()
{
  const context = useContext(AgentContext);
  
  if (!context)
  {
    throw new Error('useAgentContext must be used within AgentContextProvider')
  }

  return context;
}