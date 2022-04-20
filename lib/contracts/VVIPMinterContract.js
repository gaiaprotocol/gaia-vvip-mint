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
const VVIPMinterV2_json_1 = __importDefault(require("./abi/gaia-kronos/artifacts/contracts/VVIPMinterV2.sol/VVIPMinterV2.json"));
const Contract_1 = __importDefault(require("./Contract"));
const GaiaNFTContract_1 = __importDefault(require("./GaiaNFTContract"));
const GaiaStableDAOContract_1 = __importDefault(require("./GaiaStableDAOContract"));
const GaiaSupernovaContract_1 = __importDefault(require("./GaiaSupernovaContract"));
class VVIPMinterContract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.VVIPMinter, VVIPMinterV2_json_1.default.abi);
    }
    async price() {
        return ethers_1.BigNumber.from(await this.runMethod("price"));
    }
    async step() {
        return ethers_1.BigNumber.from(await this.runMethod("step"));
    }
    async v1Buyers(addr) {
        return await this.runMethod("v1Buyers", addr);
    }
    async presaleBuyers(addr) {
        return await this.runMethod("presaleBuyers", addr);
    }
    async mint(id) {
        const step = (await this.step()).toNumber();
        if (step === 0) {
            new Alert_1.default("오류", "아직 판매가 시작되지 않았습니다.");
        }
        else {
            const address = await Wallet_1.default.loadAddress();
            if (address !== undefined) {
                if (step === 1) {
                    if (await this.v1Buyers(address) === true) {
                        new Alert_1.default("오류", "첫 판매시 구매하셨습니다.");
                        return false;
                    }
                    if (await this.presaleBuyers(address) === true) {
                        new Alert_1.default("오류", "프리세일 기간(30분간)에 이미 구매하셨습니다.");
                        return false;
                    }
                }
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
                            return true;
                        }
                    }
                }
                else {
                    new Alert_1.default("오류", "VVIP가 아닙니다.");
                }
            }
        }
        return false;
    }
}
exports.default = new VVIPMinterContract();
//# sourceMappingURL=VVIPMinterContract.js.map