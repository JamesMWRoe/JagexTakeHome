import { BASE_URL } from "./Constants";

export async function SpaceTradeGet(subUrl: string, agentToken: string)
{
  return fetch(BASE_URL + subUrl, {
    headers: {"Authorization" : `Bearer ${agentToken}`}
  });
}

export async function SpaceTradePost(subUrl: string, agentToken: string) {
  return fetch(BASE_URL + subUrl, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${agentToken}`
    }
  });
}