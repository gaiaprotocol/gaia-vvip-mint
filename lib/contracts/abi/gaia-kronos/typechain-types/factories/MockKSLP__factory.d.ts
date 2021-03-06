import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockKSLP, MockKSLPInterface } from "../MockKSLP";
declare type MockKSLPConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockKSLP__factory extends ContractFactory {
    constructor(...args: MockKSLPConstructorParams);
    deploy(_factory: string, _tokenA: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockKSLP>;
    getDeployTransaction(_factory: string, _tokenA: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockKSLP;
    connect(signer: Signer): MockKSLP__factory;
    static readonly contractName: "MockKSLP";
    readonly contractName: "MockKSLP";
    static readonly bytecode = "0x6080604052600280546001600160a01b031916905534801561002057600080fd5b506040516040806102958339810180604052604081101561004057600080fd5b508051602090910151600080546001600160a01b039384166001600160a01b0319918216179091556001805493909216921691909117905561020e806100876000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630fc63d10146100515780635f64b55b14610075578063c45a01551461007d578063e416118114610085575b600080fd5b6100596100c3565b604080516001600160a01b039092168252519081900360200190f35b6100596100d2565b6100596100e1565b6100b16004803603604081101561009b57600080fd5b506001600160a01b0381351690602001356100f0565b60408051918252519081900360200190f35b6001546001600160a01b031681565b6002546001600160a01b031681565b6000546001600160a01b031681565b6000805460408051600481526024810182526020810180516001600160e01b0316600160e51b625517a102178152915181516060946001600160a01b03169382918083835b602083106101545780518252601f199092019160209182019101610135565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d80600081146101b4576040519150601f19603f3d011682016040523d82523d6000602084013e6101b9565b606091505b5091505060008180602001905160208110156101d457600080fd5b50518402925050509291505056fea165627a7a72305820cfb00a6f4b9211e961e15894ca3f1cc964295d85bfc530f8490b47c6210257f90029";
    static readonly abi: ({
        constant: boolean;
        inputs: {
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
    } | {
        inputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        constant?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[];
    static createInterface(): MockKSLPInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockKSLP;
}
export {};
//# sourceMappingURL=MockKSLP__factory.d.ts.map