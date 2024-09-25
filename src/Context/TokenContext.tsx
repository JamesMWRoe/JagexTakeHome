import { createContext, useContext, useState } from "react";

//Types
type TokenContextProps = {
  children: React.ReactNode;
};

type TokenContext = {
  agentToken: string;
  setAgentToken: React.Dispatch<React.SetStateAction<string>>;
}


const TokenContext = createContext<TokenContext | null>(null);


export function TokenContextProvider ({ children }: TokenContextProps)
{
  const [agentToken, setAgentToken] = useState('');

  return (
    <TokenContext.Provider value={{agentToken, setAgentToken}}>
      {children}
    </TokenContext.Provider>
  )
}

//hook for using context easily within provider
export function useTokenContext()
{
  const context = useContext(TokenContext);
  if (!context)
  {
    throw new Error("useTokenContext must be used within a TokenContextProvider");
  }

  return context;
}