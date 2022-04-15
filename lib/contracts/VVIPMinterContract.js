"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Alert_1 = __importDefault(require("../component/shared/dialogue/Alert"));
const Config_1 = __importDefault(require("../Config"));
const Klaytn_1 = __importDefault(require("../klaytn/Klaytn"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const VVIPMinter_json_1 = __importDefault(require("./abi/gaia-kronos/artifacts/contracts/VVIPMinter.sol/VVIPMinter.json"));
const Contract_1 = __importDefault(require("./Contract"));
const GaiaNFTContract_1 = __importDefault(require("./GaiaNFTContract"));
const GaiaStableDAOContract_1 = __importDefault(require("./GaiaStableDAOContract"));
const GaiaSupernovaContract_1 = __importDefault(require("./GaiaSupernovaContract"));
class VVIPMinterContract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.VVIPMinter, VVIPMinter_json_1.default.abi);
    }
    async price() {
        return ethers_1.BigNumber.from(await this.runMethod("price"));
    }
    async mint(id) {
        const address = await Wallet_1.default.loadAddress();
        if (address !== undefined) {
            const price = await this.price();
            const balance = await Klaytn_1.default.balanceOf(address);
            if ((await GaiaNFTContract_1.default.balanceOf(address)).gt(0) &&
                (await GaiaSupernovaContract_1.default.balanceOf(address)).gt(0) &&
                (await GaiaStableDAOContract_1.default.balanceOf(address)).gt(0)) {
                if (balance.lt(price)) {
                    new Alert_1.default("오류", "Klay가 부족합니다.");
                }
                else {
                    const owner = await GaiaNFTContract_1.default.ownerOf(id);
                    if (owner !== this.address) {
                        new Alert_1.default("오류", "해당 NFT는 이미 판매됐습니다.");
                    }
                    else {
                        await this.runWalletMethodWithValue(price, "mint", id);
                    }
                }
            }
            else {
                new Alert_1.default("오류", "VVIP가 아닙니다.");
            }
        }
    }
}
exports.default = new VVIPMinterContract();
//# sourceMappingURL=VVIPMinterContract.js.map