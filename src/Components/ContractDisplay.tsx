import "../Styles/ContractDisplay.css"
import Contract from "../Helpers/Contract"
import { SpaceTradePost } from "../Helpers/APIRequests";
import { useTokenContext } from "../Context/TokenContext";
import { useAgentContext } from "../Context/AgentContext";
import { useContractContext } from "../Context/ContractContext";


type ContractProps = {
  contract: Contract;
}

export default function ContractDisplay(props: ContractProps)
{
  const {agentToken} = useTokenContext();
  const {setAgent} = useAgentContext();
  const {contracts, setContracts} = useContractContext();

  console.log(props.contract.accepted)

  const AcceptContract = async () => 
  {
    const resp = await SpaceTradePost(`/my/contracts/${props.contract.id}/accept`, agentToken);

    const json = await resp.json();

    if (resp.ok)
    {
      setAgent(json.data.agent)
      setContracts(contracts.map(contract => (contract.id === props.contract.id ? json.data.contract : contract)));
    }
  }

  return(
    <div className="contract">
      <div className="contractTitle">
        <p className="contractType">contract type: {props.contract.type}</p>
        <button id="acceptButton" onClick={AcceptContract}>Accept</button>
      </div>
      <div className="contractTerms">
        <h3>Terms:</h3>
        <span className="deliver"> Deliver {props.contract.terms.deliver[0].tradeSymbol} to {props.contract.terms.deliver[0].destinationSymbol} by {Date(props.contract.terms.deadline).toString()} </span>
      </div>
      <div className="contractPayment">
        <h3>Payment:</h3>
        <p>Up Front: {props.contract.terms.payment.onAccepted}</p>
        <p>On Completion: {props.contract.terms.payment.onFulfilled}</p>
      </div>
      <div className="extraInfo">
        <span>Accepted: {props.contract.accepted ? "true" : "false"}</span>
      </div>
    </div>
    
  )
}