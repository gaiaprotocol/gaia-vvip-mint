import { BigNumber, BigNumberish } from "ethers";
import Alert from "../component/shared/dialogue/Alert";
import Config from "../Config";
import Klaytn from "../klaytn/Klaytn";
import Wallet from "../klaytn/Wallet";
import VVIPMinterArtifact from "./abi/gaia-kronos/artifacts/contracts/VVIPMinterV2.sol/VVIPMinterV2.json";
import Contract from "./Contract";
import GaiaNFTContract from "./GaiaNFTContract";
import GaiaStableDAOContract from "./GaiaStableDAOContract";
import GaiaSupernovaContract from "./GaiaSupernovaContract";

class VVIPMinterContract extends Contract {

    constructor() {
        super(Config.contracts.VVIPMinter, VVIPMinterArtifact.abi);
    }

    public async price(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("price"));
    }

    public async step(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("step"));
    }

    public async v1Buyers(addr: string): Promise<boolean> {
        return await this.runMethod("v1Buyers", addr);
    }

    public async presaleBuyers(addr: string): Promise<boolean> {
        return await this.runMethod("presaleBuyers", addr);
    }

    public async mint(id: BigNumberish) {
        const step = (await this.step()).toNumber();
        if (step === 0) {
            new Alert("오류", "아직 판매가 시작되지 않았습니다.");
        } else {
            const address = await Wallet.loadAddress();
            if (address !== undefined) {

                if (step === 1) {
                    if (await this.v1Buyers(address) === true) {
                        new Alert("오류", "첫 판매시 구매하셨습니다.");
                        return false;
                    }
                    if (await this.presaleBuyers(address) === true) {
                        new Alert("오류", "프리세일 기간(30분간)에 이미 구매하셨습니다.");
                        return false;
                    }
                }

                const price = await this.price();
                const balance = await Klaytn.balanceOf(address);
                if (
                    (await GaiaNFTContract.balanceOf(address)).gt(0) &&
                    (await GaiaSupernovaContract.balanceOf(address)).gt(0) &&
                    (await GaiaStableDAOContract.balanceOf(address)).gt(0)
                ) {
                    if (balance.lt(price)) {
                        new Alert("오류", "Klay가 부족합니다.");
                    } else {
                        const owner = await GaiaNFTContract.ownerOf(id);
                        if (owner !== this.address) {
                            new Alert("오류", "해당 NFT는 이미 판매됐습니다.");
                        } else {
                            await this.runWalletMethodWithValue(price, "mint", id);
                            return true;
                        }
                    }
                } else {
                    new Alert("오류", "VVIP가 아닙니다.");
                }
            }
        }
        return false;
    }
}

export default new VVIPMinterContract();
