import { useAgentContext } from "../Context/AgentContext"

export default function ProfilePage() 
{
  const {agent} = useAgentContext();
  
  return (
    <>
      <h1>Welcome {agent.symbol}</h1>
      <p>Credits: {agent.credits}</p>
      <p>Ship Count: {agent.shipCount}</p>
    </>
   
  )
}