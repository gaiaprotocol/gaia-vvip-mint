"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const GaiaNFT_json_1 = __importDefault(require("./abi/gaia-kronos/artifacts/contracts/GaiaNFT.sol/GaiaNFT.json"));
const KIP17Contract_1 = __importDefault(require("./standard/KIP17Contract"));
class GaiaStableDAOContract extends KIP17Contract_1.default {
    constructor() {
        super("0xEccE87e11d057713665F020C5e206E18fCCBc8B7", GaiaNFT_json_1.default.abi);
    }
    async totalSupply() {
        return ethers_1.BigNumber.from(await this.runMethod("totalSupply"));
    }
}
exports.default = new GaiaStableDAOContract();
//# sourceMappingURL=GaiaStableDAOContract.js.map