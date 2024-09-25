import { createContext, useContext, useState } from "react";
import Contract from "../Helpers/Contract"

type ContractContext = {
  contracts: Array<Contract>;
  setContracts: React.Dispatch<React.SetStateAction<Contract[]>>;
}

type ContractContextProps = {
  children: React.ReactNode;
}

const ContractContext = createContext<ContractContext | null>(null);

export default function ContractContextProvider({children}: ContractContextProps)
{
  const [contracts, setContracts] = useState<Array<Contract>>([]);

  return(
    <ContractContext.Provider value={{contracts, setContracts}}>
      {children}
    </ContractContext.Provider>
  )
}

export function useContractContext()
{
  const context = useContext(ContractContext);
  if (!context)
  {
    throw new Error ("useContractContext must be used within a ContractContextProvider")
  }

  return context;
}