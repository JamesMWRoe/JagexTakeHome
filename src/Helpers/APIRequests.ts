import { BASE_URL } from "./Constants";

export async function SpaceTradeGet(subUrl: string, agentToken: string)
{
  return fetch(BASE_URL + subUrl, {
    headers: {"Authorization" : `Bearer ${agentToken}`}
  });
}