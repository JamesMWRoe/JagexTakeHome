interface Contract
{
    id: string;
    factionSymbol: string;
    type: string;
    terms: ContractTerms;
    accepted: boolean;
    fulfilled: boolean;
    expiration: string;
    deadlineToAccept: string;
}

interface ContractTerms
{
    deadline: string;
    payment: ContractPayment
    deliver: Array<ContractDeliverGoods>
}

interface ContractPayment
{
    onAccepted: number;
    onFulfilled: number;
}

interface ContractDeliverGoods
{
    tradeSymbol: string;
    destinationSymbol: string;
    unitsRequired: number;
    unitsFulfilled: number;
}

export default Contract;