import { createContext, useContext } from "react";


type GamePageContext = {
  page: Page;
  setPage: React.Dispatch<React.SetStateAction<Page>>;
}

type GamePageContextProps = {
  children: React.ReactNode;
  page: Page;
  setPage: React.Dispatch<React.SetStateAction<Page>>;
}

export type Page = "Profile" | "StarMap" | "Contracts" | "Shipyard"

const GamePageContext = createContext<GamePageContext | null>(null);

export default function GamePageContextProvider ({children, page, setPage}: GamePageContextProps)
{
  return(
    <GamePageContext.Provider value={{page, setPage}} >
      {children}
    </GamePageContext.Provider>
  );
}

export function useGamePageContext()
{
  const context = useContext(GamePageContext);
  if (!context)
  {
    throw new Error("useGamePageContext must be used within a GamePageContextProvider");
  }

  return context;
}