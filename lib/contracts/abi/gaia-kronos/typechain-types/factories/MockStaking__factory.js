"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockStaking__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        constant: false,
        inputs: [],
        name: "renounceManagement",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "",
                type: "address",
            },
        ],
        name: "claim",
        outputs: [],
        payable: false,
        stateMutability: "pure",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "index",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "newOwner_",
                type: "address",
            },
        ],
        name: "pushManagement",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "manager",
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
        constant: false,
        inputs: [],
        name: "pullManagement",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "_amount",
                type: "uint256",
            },
            {
                name: "_recipient",
                type: "address",
            },
        ],
        name: "stake",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "contractBalance",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "epoch",
        outputs: [
            {
                name: "number",
                type: "uint256",
            },
            {
                name: "distribute",
                type: "uint256",
            },
            {
                name: "length",
                type: "uint32",
            },
            {
                name: "endBlock",
                type: "uint32",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "sKRNO",
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
        constant: false,
        inputs: [
            {
                name: "_amount",
                type: "uint256",
            },
            {
                name: "_trigger",
                type: "bool",
            },
        ],
        name: "unstake",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "rebase",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "KRNO",
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
        inputs: [
            {
                name: "_KRNO",
                type: "address",
            },
            {
                name: "_sKRNO",
                type: "address",
            },
            {
                name: "_epochLength",
                type: "uint32",
            },
            {
                name: "_firstEpochNumber",
                type: "uint256",
            },
            {
                name: "_firstEpochBlock",
                type: "uint32",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipPushed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipPulled",
        type: "event",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5060405160a080610c2a833981018060405260a081101561003057600080fd5b50805160208201516040808401516060850151608090950151600080546001600160a01b031916331780825593519596949592949391926001600160a01b0392909216917fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908290a36001600160a01b0385166100ac57600080fd5b600280546001600160a01b0319166001600160a01b038781169190911790915584166100d757600080fd5b600380546001600160a01b0319166001600160a01b0395909516949094179093556040805160808101825282815260006020820181905263ffffffff94851692820183905293909416606090940184905260049190915560058290556006805463ffffffff191690911767ffffffff00000000191664010000000090930292909217909155610abd9150819061016d90396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80637acb77571161008c5780639cd45d7b116100665780639cd45d7b146101ec5780639ebea88c146101f4578063af14052c14610219578063dc176cfa14610221576100cf565b80637acb7757146101705780638b7afe2e146101b0578063900cf0cf146101b8576100cf565b8063089208d8146100d45780631e83409a146100de5780632986c0e51461010457806346f68ee91461011e578063481c6a75146101445780635a96ac0a14610168575b600080fd5b6100dc610229565b005b6100dc600480360360208110156100f457600080fd5b50356001600160a01b03166102d5565b61010c6102d8565b60408051918252519081900360200190f35b6100dc6004803603602081101561013457600080fd5b50356001600160a01b0316610351565b61014c610456565b604080516001600160a01b039092168252519081900360200190f35b6100dc610465565b61019c6004803603604081101561018657600080fd5b50803590602001356001600160a01b0316610512565b604080519115158252519081900360200190f35b61010c610633565b6101c0610681565b60408051948552602085019390935263ffffffff91821684840152166060830152519081900360800190f35b61014c61069f565b6100dc6004803603604081101561020a57600080fd5b508035906020013515156106ae565b6100dc6107cc565b61014c610957565b6000546001600160a01b0316331461028b5760408051600160e51b62461bcd02815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908390a3600080546001600160a01b0319169055565b50565b60035460408051600160e01b632986c0e502815290516000926001600160a01b031691632986c0e5916004808301926020929190829003018186803b15801561032057600080fd5b505afa158015610334573d6000803e3d6000fd5b505050506040513d602081101561034a57600080fd5b5051905090565b6000546001600160a01b031633146103b35760408051600160e51b62461bcd02815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b0381166103fb57604051600160e51b62461bcd028152600401808060200182810382526026815260200180610a4a6026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba91a3600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031690565b6001546001600160a01b031633146104b157604051600160e51b62461bcd028152600401808060200182810382526022815260200180610a706022913960400191505060405180910390fd5b600154600080546040516001600160a01b0393841693909116917faa151555690c956fc3ea32f106bb9f119b5237a061eaa8557cff3e51e3792c8d91a3600154600080546001600160a01b0319166001600160a01b03909216919091179055565b600061051c6107cc565b60025460408051600160e01b6323b872dd0281523360048201523060248201526044810186905290516001600160a01b03909216916323b872dd916064808201926020929091908290030181600087803b15801561057957600080fd5b505af115801561058d573d6000803e3d6000fd5b505050506040513d60208110156105a357600080fd5b505060035460408051600160e01b63a9059cbb0281526001600160a01b038581166004830152602482018790529151919092169163a9059cbb9160448083019260209291908290030181600087803b1580156105fe57600080fd5b505af1158015610612573d6000803e3d6000fd5b505050506040513d602081101561062857600080fd5b506001949350505050565b60025460408051600160e01b6370a0823102815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561032057600080fd5b60045460055460065463ffffffff8082169164010000000090041684565b6003546001600160a01b031681565b80156106bc576106bc6107cc565b60035460408051600160e01b6323b872dd0281523360048201523060248201526044810185905290516001600160a01b03909216916323b872dd916064808201926020929091908290030181600087803b15801561071957600080fd5b505af115801561072d573d6000803e3d6000fd5b505050506040513d602081101561074357600080fd5b505060025460408051600160e01b63a9059cbb0281523360048201526024810185905290516001600160a01b039092169163a9059cbb916044808201926020929091908290030181600087803b15801561079c57600080fd5b505af11580156107b0573d6000803e3d6000fd5b505050506040513d60208110156107c657600080fd5b50505050565b60065463ffffffff4281166401000000009092041611610955576003546005546004805460408051600160e21b630163b36d02815292830193909352602482015290516001600160a01b039092169163058ecdb4916044808201926020929091908290030181600087803b15801561084357600080fd5b505af1158015610857573d6000803e3d6000fd5b505050506040513d602081101561086d57600080fd5b50506006805464010000000080820463ffffffff90811681841601160267ffffffff000000001990911617905560048054600101905560006108ad610633565b90506000600360009054906101000a90046001600160a01b03166001600160a01b0316639358928b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156108ff57600080fd5b505afa158015610913573d6000803e3d6000fd5b505050506040513d602081101561092957600080fd5b5051905080821161093e576000600555610952565b61094e828263ffffffff61096616565b6005555b50505b565b6002546001600160a01b031681565b60006109a883836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506109af565b9392505050565b60008184841115610a4157604051600160e51b62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610a065781810151838201526020016109ee565b50505050905090810190601f168015610a335780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505090039056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f776e61626c653a206d757374206265206e6577206f776e657220746f2070756c6ca165627a7a72305820d2cdd3be12a1129cef8d5dd660608da2fb90216071c8115297e95704b8947c4f0029";
const isSuperArgs = (xs) => xs.length > 1;
class MockStaking__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "MockStaking";
    }
    deploy(_KRNO, _sKRNO, _epochLength, _firstEpochNumber, _firstEpochBlock, overrides) {
        return super.deploy(_KRNO, _sKRNO, _epochLength, _firstEpochNumber, _firstEpochBlock, overrides || {});
    }
    getDeployTransaction(_KRNO, _sKRNO, _epochLength, _firstEpochNumber, _firstEpochBlock, overrides) {
        return super.getDeployTransaction(_KRNO, _sKRNO, _epochLength, _firstEpochNumber, _firstEpochBlock, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.MockStaking__factory = MockStaking__factory;
MockStaking__factory.bytecode = _bytecode;
MockStaking__factory.abi = _abi;
//# sourceMappingURL=MockStaking__factory.js.map