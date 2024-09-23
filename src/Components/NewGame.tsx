import { useState } from "react"
import Agent from "../Helpers/Agent";

/**
 * This component is a basic MVP of part one of the quickstart. It handles registering your agent and receives a token
 * which you will need to use in subsequent calls. Therefore, you might want to refactor or replace this as you move forward.
 */

interface NewGame
{
  agentToken: string;
  setAgentToken: React.Dispatch<React.SetStateAction<string>>;
  setAgent: React.Dispatch<React.SetStateAction<Agent | undefined>>;
}

function NewGame(newGameProps: NewGame)
{
  const [resp, setResp] = useState("");
  const [form, setForm] = useState({ symbol: "", faction: "COSMIC" });

  return (<>
    <h1>New Game</h1>
    <input name="symbol" value={form.symbol} onChange={(e) => setForm({ ...form, symbol: e.currentTarget.value })} />
    <input name="faction" value={form.faction} onChange={(e) => setForm({ ...form, faction: e.currentTarget.value })} />
    <input type="submit" onClick={HandleSubmit} />
    <pre>API token: {newGameProps.agentToken}</pre>
    <pre>Response: {resp}</pre>
  </>)

  async function HandleSubmit()
  {
    const resp = await fetch("https://api.spacetraders.io/v2/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        symbol: form.symbol,
        faction: form.faction,
      }),
    });

    const json = await resp.json();

    if (resp.ok) 
    {
      newGameProps.setAgentToken(json.data.token);
      newGameProps.setAgent(json.data.agent);
    }

    setResp(JSON.stringify(json, null, 2))
  }
}

export default NewGame