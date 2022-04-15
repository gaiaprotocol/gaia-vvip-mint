"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MocksKRNO__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        constant: true,
        inputs: [
            {
                name: "",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                name: "",
                type: "bool",
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
                name: "profit_",
                type: "uint256",
            },
            {
                name: "epoch_",
                type: "uint256",
            },
        ],
        name: "rebase",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
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
        constant: false,
        inputs: [
            {
                name: "spender",
                type: "address",
            },
            {
                name: "value",
                type: "uint256",
            },
        ],
        name: "approve",
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
        name: "totalSupply",
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
        inputs: [
            {
                name: "amount",
                type: "uint256",
            },
        ],
        name: "gonsForBalance",
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
                name: "from",
                type: "address",
            },
            {
                name: "to",
                type: "address",
            },
            {
                name: "value",
                type: "uint256",
            },
        ],
        name: "transferFrom",
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
        constant: true,
        inputs: [],
        name: "INDEX",
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
                name: "_INDEX",
                type: "uint256",
            },
        ],
        name: "setIndex",
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
        constant: false,
        inputs: [
            {
                name: "recipient",
                type: "address",
            },
            {
                name: "amount",
                type: "uint256",
            },
        ],
        name: "safeTransfer",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "sender",
                type: "address",
            },
            {
                name: "recipient",
                type: "address",
            },
            {
                name: "amount",
                type: "uint256",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
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
        constant: true,
        inputs: [
            {
                name: "who",
                type: "address",
            },
        ],
        name: "balanceOf",
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
        inputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        name: "rebases",
        outputs: [
            {
                name: "epoch",
                type: "uint256",
            },
            {
                name: "rebase",
                type: "uint256",
            },
            {
                name: "totalStakedBefore",
                type: "uint256",
            },
            {
                name: "totalStakedAfter",
                type: "uint256",
            },
            {
                name: "amountRebased",
                type: "uint256",
            },
            {
                name: "index",
                type: "uint256",
            },
            {
                name: "blockNumberOccured",
                type: "uint32",
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
                name: "gons",
                type: "uint256",
            },
        ],
        name: "balanceForGons",
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
        name: "circulatingSupply",
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
        name: "initializer",
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
                name: "to",
                type: "address",
            },
            {
                name: "value",
                type: "uint256",
            },
        ],
        name: "transfer",
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
        constant: false,
        inputs: [
            {
                name: "sender",
                type: "address",
            },
            {
                name: "recipient",
                type: "address",
            },
            {
                name: "amount",
                type: "uint256",
            },
            {
                name: "",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "stakingContract_",
                type: "address",
            },
        ],
        name: "initialize",
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
        inputs: [
            {
                name: "owner_",
                type: "address",
            },
            {
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
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
                name: "recipient",
                type: "address",
            },
            {
                name: "amount",
                type: "uint256",
            },
            {
                name: "",
                type: "bytes",
            },
        ],
        name: "safeTransfer",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "stakingContract",
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
        inputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "epoch",
                type: "uint256",
            },
            {
                indexed: false,
                name: "timestamp",
                type: "uint256",
            },
            {
                indexed: false,
                name: "totalSupply",
                type: "uint256",
            },
        ],
        name: "LogSupply",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "epoch",
                type: "uint256",
            },
            {
                indexed: false,
                name: "rebase",
                type: "uint256",
            },
            {
                indexed: false,
                name: "index",
                type: "uint256",
            },
        ],
        name: "LogRebase",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "stakingContract",
                type: "address",
            },
        ],
        name: "LogStakingContractUpdated",
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
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b50604080518082018252600d81527f5374616b6564204b726f6e6f730000000000000000000000000000000000000060208083019182528351808501909452600584527f734b524e4f00000000000000000000000000000000000000000000000000000090840152815191929160099162000090916003919062000269565b508151620000a690600490602085019062000269565b506005805460ff191660ff9290921691909117610100600160a81b03191661010033810291909117918290556040516001600160a01b0391909204169250600091507fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908290a3600880546001600160a01b031916331790556611c37937e0800060028190556200014e908060001906600019036200015760201b6200101e1790919060201c565b600b556200030e565b6000620001a183836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250620001a860201b60201c565b9392505050565b6000818362000252576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101562000216578181015183820152602001620001fc565b50505050905090810190601f168015620002445780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385816200025f57fe5b0495945050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002ac57805160ff1916838001178555620002dc565b82800160010185558215620002dc579182015b82811115620002dc578251825591602001919060010190620002bf565b50620002ea929150620002ee565b5090565b6200030b91905b80821115620002ea5760008155600101620002f5565b90565b6113fa806200031e6000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c8063481c6a75116100de5780639ce110d711610097578063c4d66de811610071578063c4d66de814610515578063dd62ed3e1461053b578063eb79554914610569578063ee99205c146106245761018e565b80639ce110d71461041b578063a9059cbb14610423578063b88d4fde1461044f5761018e565b8063481c6a75146103495780635a96ac0a1461036d57806370a082311461037557806373c69eb71461039b5780637965d56d146103f65780639358928b146104135761018e565b806323b872dd1161014b57806340a5737f1161012557806340a5737f146102a4578063423f6cef146102c157806342842e0e146102ed57806346f68ee9146103235761018e565b806323b872dd1461025e5780632986c0e5146102945780632df75cb11461029c5761018e565b806301ffc9a714610193578063058ecdb4146101ce578063089208d814610203578063095ea7b31461020d57806318160ddd146102395780631bd3967414610241575b600080fd5b6101ba600480360360208110156101a957600080fd5b50356001600160e01b03191661062c565b604080519115158252519081900360200190f35b6101f1600480360360408110156101e457600080fd5b5080359060200135610632565b60408051918252519081900360200190f35b61020b610770565b005b6101ba6004803603604081101561022357600080fd5b506001600160a01b038135169060200135610827565b6101f161088d565b6101f16004803603602081101561025757600080fd5b5035610893565b6101ba6004803603606081101561027457600080fd5b506001600160a01b038135811691602081013590911690604001356108aa565b6101f1610a08565b6101f1610a1a565b6101ba600480360360208110156102ba57600080fd5b5035610a20565b61020b600480360360408110156102d757600080fd5b506001600160a01b038135169060200135610aab565b61020b6004803603606081101561030357600080fd5b506001600160a01b03813581169160208101359091169060400135610ac9565b61020b6004803603602081101561033957600080fd5b50356001600160a01b0316610ae9565b610351610bf9565b604080516001600160a01b039092168252519081900360200190f35b61020b610c0d565b6101f16004803603602081101561038b57600080fd5b50356001600160a01b0316610cc9565b6103b8600480360360208110156103b157600080fd5b5035610cf7565b604080519788526020880196909652868601949094526060860192909252608085015260a084015263ffffffff1660c0830152519081900360e00190f35b6101f16004803603602081101561040c57600080fd5b5035610d49565b6101f1610d60565b610351610d8b565b6101ba6004803603604081101561043957600080fd5b506001600160a01b038135169060200135610d9a565b61020b6004803603608081101561046557600080fd5b6001600160a01b038235811692602081013590911691604082013591908101906080810160608201356401000000008111156104a057600080fd5b8201836020820111156104b257600080fd5b803590602001918460018302840111640100000000831117156104d457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610e66945050505050565b6101ba6004803603602081101561052b57600080fd5b50356001600160a01b0316610e78565b6101f16004803603604081101561055157600080fd5b506001600160a01b0381358116916020013516610f71565b61020b6004803603606081101561057f57600080fd5b6001600160a01b03823516916020810135918101906060810160408201356401000000008111156105af57600080fd5b8201836020820111156105c157600080fd5b803590602001918460018302840111640100000000831117156105e357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610f9c945050505050565b610351610fac565b50600190565b600080600061063f610d60565b9050846106d557600254604080514281526020810192909252805186927f917acfbe39be6509ccf7fecb66a7e42ce2be1083c2d7dd3b9b7491dabddb8da492908290030190a2837f6012dbce857565c4a40974aa5de8373a761fc429077ef0c8c8611d1e20d63fb260006106b1610a08565b6040805192835260208301919091528051918290030190a26002549250505061076a565b801561070757610700816106f460025488610fbb90919063ffffffff16565b9063ffffffff61101e16565b915061070b565b8491505b60025461071e908363ffffffff61106016565b60028190556001600160801b03101561073d576001600160801b036002555b60025461075390660e3d2cfe61ffff199061101e565b600b556107618186866110bd565b50600254925050505b92915050565b60055461010090046001600160a01b031633146107d75760408051600160e51b62461bcd02815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60055460405160009161010090046001600160a01b0316907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908390a360058054610100600160a81b0319169055565b336000818152600d602090815260408083206001600160a01b038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b60025490565b600061076a600b5483610fbb90919063ffffffff16565b6001600160a01b0383166000908152600d602090815260408083203384529091528120546108de908363ffffffff61122116565b6001600160a01b0385166000818152600d60209081526040808320338085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a3600061094583610893565b6001600160a01b0386166000908152600c6020526040902054909150610971908263ffffffff61122116565b6001600160a01b038087166000908152600c602052604080822093909355908616815220546109a6908263ffffffff61106016565b6001600160a01b038086166000818152600c602090815260409182902094909455805187815290519193928916927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3506001949350505050565b6000610a15600a54610d49565b905090565b600a5481565b60055460009061010090046001600160a01b03163314610a8a5760408051600160e51b62461bcd02815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600a5415610a9757600080fd5b610aa082610893565b600a55506001919050565b610ac5828260405180602001604052806000815250610f9c565b5050565b610ae483838360405180602001604052806000815250610e66565b505050565b60055461010090046001600160a01b03163314610b505760408051600160e51b62461bcd02815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b038116610b9857604051600160e51b62461bcd0281526004018080602001828103825260268152602001806113666026913960400191505060405180910390fd5b6005546040516001600160a01b0380841692610100900416907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba90600090a3600680546001600160a01b0319166001600160a01b0392909216919091179055565b60055461010090046001600160a01b031690565b6006546001600160a01b03163314610c5957604051600160e51b62461bcd02815260040180806020018281038252602281526020018061138c6022913960400191505060405180910390fd5b6006546005546040516001600160a01b0392831692610100909204909116907faa151555690c956fc3ea32f106bb9f119b5237a061eaa8557cff3e51e3792c8d90600090a3600654600580546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b600b546001600160a01b0382166000908152600c6020526040812054909161076a919063ffffffff61101e16565b60098181548110610d0457fe5b60009182526020909120600790910201805460018201546002830154600384015460048501546005860154600690960154949650929491939092919063ffffffff1687565b600061076a600b548361101e90919063ffffffff16565b600754600090610a1590610d7c906001600160a01b0316610cc9565b6002549063ffffffff61122116565b6008546001600160a01b031681565b600080610db2600b5484610fbb90919063ffffffff16565b336000908152600c6020526040902054909150610dd5908263ffffffff61122116565b336000908152600c6020526040808220929092556001600160a01b03861681522054610e07908263ffffffff61106016565b6001600160a01b0385166000818152600c60209081526040918290209390935580518681529051919233927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35060019392505050565b610e718484846108aa565b5050505050565b6008546000906001600160a01b03163314610e9257600080fd5b6001600160a01b038216610ea557600080fd5b600780546001600160a01b0319166001600160a01b038481169190911780835581166000908152600c60209081526040808320660e3d2cfe61ffff19905593546002548551908152945193169391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a3604080516001600160a01b038416815290517f817c653428858ed536dc085c5d8273734c517b55de44b55f5c5877a75e3373a19181900360200190a15050600880546001600160a01b0319169055600190565b6001600160a01b039182166000908152600d6020908152604080832093909416825291909152205490565b610fa68383610d9a565b50505050565b6007546001600160a01b031681565b600082610fca5750600061076a565b82820282848281610fd757fe5b041461101757604051600160e51b62461bcd0281526004018080602001828103825260218152602001806113ae6021913960400191505060405180910390fd5b9392505050565b600061101783836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611263565b6000828201838110156110175760408051600160e51b62461bcd02815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000806110dc856106f486670de0b6b3a764000063ffffffff610fbb16565b905060096040518060e00160405280858152602001838152602001878152602001611105610d60565b8152602001868152602001611118610a08565b81524263ffffffff81811660209384015284546001808201875560009687529584902085516007909202019081558484015195810195909555604080850151600280880191909155606086015160038801556080860151600488015560a0860151600588015560c0909501516006909601805463ffffffff1916969092169590951790559154835192835290820152815185927f917acfbe39be6509ccf7fecb66a7e42ce2be1083c2d7dd3b9b7491dabddb8da4928290030190a2827f6012dbce857565c4a40974aa5de8373a761fc429077ef0c8c8611d1e20d63fb2826111fe610a08565b6040805192835260208301919091528051918290030190a2506001949350505050565b600061101783836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611308565b600081836112f257604051600160e51b62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b838110156112b757818101518382015260200161129f565b50505050905090810190601f1680156112e45780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385816112fe57fe5b0495945050505050565b6000818484111561135d57604051600160e51b62461bcd0281526020600482018181528351602484015283519092839260449091019190850190808383600083156112b757818101518382015260200161129f565b50505090039056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f776e61626c653a206d757374206265206e6577206f776e657220746f2070756c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a165627a7a723058201635c2d1db533be390ce40b78f17e518312a5d2505d90f9961765b58ffe6fa140029";
const isSuperArgs = (xs) => xs.length > 1;
class MocksKRNO__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "MocksKRNO";
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
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
exports.MocksKRNO__factory = MocksKRNO__factory;
MocksKRNO__factory.bytecode = _bytecode;
MocksKRNO__factory.abi = _abi;
//# sourceMappingURL=MocksKRNO__factory.js.map