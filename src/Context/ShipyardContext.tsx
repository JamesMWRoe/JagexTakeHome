import { createContext, useContext, useState } from "react"

type ShipyardLocation = {
  waypoint: string;
  system: string;
}

type ShipyardContext = {
  shipyardWaypoint: ShipyardLocation;
  setShipyardWaypoint: React.Dispatch<React.SetStateAction<ShipyardLocation>>;
}

type ShipyardContextProps = {
  children: React.ReactNode;
}

const ShipyardContext = createContext<ShipyardContext | null>(null);

export default function ShipyardContextProvider({ children }: ShipyardContextProps)
{
  const [shipyardWaypoint, setShipyardWaypoint] = useState<ShipyardLocation>({waypoint: '', system: ''});

  return(
    <ShipyardContext.Provider value={{shipyardWaypoint, setShipyardWaypoint}}>
      {children}
    </ShipyardContext.Provider>
  )
}

export function useShipyardContext()
{
  const context = useContext(ShipyardContext)
  if (!context)
  {
    throw new Error("useShipyardContext must be used within a ShipyardContextProvider")
  }

  return context
}