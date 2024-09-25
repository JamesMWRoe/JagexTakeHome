import Contract from "../Helpers/Contract"

interface ContractProps
{
  contract: Contract;
}

function ContractPage(props: ContractProps)
{
  return(
    <>
      <h1>Contract Information</h1>
      <p>type: {props.contract.type}</p>
      <p>faction: {props.contract.factionSymbol}</p>

      <div className="payment">
        <h3>Payment:</h3>
        <p>Up Front: {props.contract.terms.payment.onAccepted}</p>
        <p>On Completion: {props.contract.terms.payment.onFulfilled}</p>
      </div>

      <button onClick={AcceptContract}>Accept</button>
    </>
  );

  async function AcceptContract()
  {}
}

export default ContractPage