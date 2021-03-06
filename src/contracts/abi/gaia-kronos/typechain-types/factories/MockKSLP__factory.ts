/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockKSLP, MockKSLPInterface } from "../MockKSLP";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "tokenA",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "tokenB",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "factory",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address",
      },
      {
        name: "inAmount",
        type: "uint256",
      },
    ],
    name: "estimatePos",
    outputs: [
      {
        name: "outAmount",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_factory",
        type: "address",
      },
      {
        name: "_tokenA",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x6080604052600280546001600160a01b031916905534801561002057600080fd5b506040516040806102958339810180604052604081101561004057600080fd5b508051602090910151600080546001600160a01b039384166001600160a01b0319918216179091556001805493909216921691909117905561020e806100876000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630fc63d10146100515780635f64b55b14610075578063c45a01551461007d578063e416118114610085575b600080fd5b6100596100c3565b604080516001600160a01b039092168252519081900360200190f35b6100596100d2565b6100596100e1565b6100b16004803603604081101561009b57600080fd5b506001600160a01b0381351690602001356100f0565b60408051918252519081900360200190f35b6001546001600160a01b031681565b6002546001600160a01b031681565b6000546001600160a01b031681565b6000805460408051600481526024810182526020810180516001600160e01b0316600160e51b625517a102178152915181516060946001600160a01b03169382918083835b602083106101545780518252601f199092019160209182019101610135565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d80600081146101b4576040519150601f19603f3d011682016040523d82523d6000602084013e6101b9565b606091505b5091505060008180602001905160208110156101d457600080fd5b50518402925050509291505056fea165627a7a72305820cfb00a6f4b9211e961e15894ca3f1cc964295d85bfc530f8490b47c6210257f90029";

type MockKSLPConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockKSLPConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockKSLP__factory extends ContractFactory {
  constructor(...args: MockKSLPConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MockKSLP";
  }

  deploy(
    _factory: string,
    _tokenA: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockKSLP> {
    return super.deploy(
      _factory,
      _tokenA,
      overrides || {}
    ) as Promise<MockKSLP>;
  }
  getDeployTransaction(
    _factory: string,
    _tokenA: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_factory, _tokenA, overrides || {});
  }
  attach(address: string): MockKSLP {
    return super.attach(address) as MockKSLP;
  }
  connect(signer: Signer): MockKSLP__factory {
    return super.connect(signer) as MockKSLP__factory;
  }
  static readonly contractName: "MockKSLP";
  public readonly contractName: "MockKSLP";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockKSLPInterface {
    return new utils.Interface(_abi) as MockKSLPInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockKSLP {
    return new Contract(address, _abi, signerOrProvider) as MockKSLP;
  }
}
