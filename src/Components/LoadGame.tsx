import { useState } from "react"
import { useTokenContext } from "../Context/TokenContext";
import Agent from "../Helpers/Agent";
import { SpaceTradeGet } from "../Helpers/APIRequests";

interface LoadGameProps
{
  setAgent: React.Dispatch<React.SetStateAction<Agent | undefined>>;
}

export default function LoadGame(props: LoadGameProps)
{
  const {setAgentToken} = useTokenContext();

  const [loginToken, setLoginToken] = useState('');
  const [resp, setResp] = useState('');

  const  HandleLogin = async () => 
  {
    console.log(loginToken)
    const resp = await SpaceTradeGet('/my/agent', loginToken);

    const json = await resp.json();

    if (resp.ok)
    {
      setAgentToken(loginToken);
      props.setAgent(json.data);
    }

    setResp(JSON.stringify(json, null, 2));
  }

  return (
    <>
      <h1>Load Game</h1>
      <span>Agent Token: </span>
      <input type="text" name="token" value={loginToken} onChange={e => setLoginToken(e.target.value)} />
      <button type="submit" onClick={HandleLogin}>Login</button>
      <pre>Response: {resp}</pre>
    </>
  )

}