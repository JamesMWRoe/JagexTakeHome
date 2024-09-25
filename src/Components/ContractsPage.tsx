import { useContractContext } from "../Context/ContractContext";
import { useTokenContext } from "../Context/TokenContext";
import { SpaceTradeGet } from "../Helpers/APIRequests";
import ContractDisplay from "./ContractDisplay";

function ContractPage()
{
  const {agentToken} = useTokenContext();
  const {contracts, setContracts} = useContractContext();

  const GetContract = async () => 
  {
    console.log('getting contracts');
    const resp = await SpaceTradeGet('/my/contracts', agentToken);

    const json = await resp.json()

    if (resp.ok)
    {
      console.log('hello');
      console.log(json.data);
      setContracts(json.data);
    }

  }

  if (!contracts.length)
  {
    GetContract()
  }

  console.log(contracts);
  return(
    <>
      <h1>Contract Information</h1>
      {contracts.map((contract) => ( <ContractDisplay contract={contract} /> ))}
    </>
  );

}

export default ContractPage