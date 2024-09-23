interface Contract
{
    id: string;
    factionSymbol: string;
    type: string;
    terms: ContractTerms;
    accepted: boolean;
    fulfilled: boolean;
    expiration: Date;
    deadlineToAccept: Date;
}

interface ContractTerms
{
    deadline: Date;
    payment: ContractPayment
    deliver: ContractDeliverGoods
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