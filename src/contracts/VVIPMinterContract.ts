import { BigNumber, BigNumberish } from "ethers";
import Alert from "../component/shared/dialogue/Alert";
import Config from "../Config";
import Klaytn from "../klaytn/Klaytn";
import Wallet from "../klaytn/Wallet";
import VVIPMinterArtifact from "./abi/gaia-kronos/artifacts/contracts/VVIPMinter.sol/VVIPMinter.json";
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

    public async mint(id: BigNumberish) {
        const address = await Wallet.loadAddress();
        if (address !== undefined) {
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
                    }
                }
            } else {
                new Alert("오류", "VVIP가 아닙니다.");
            }
        }
    }
}

export default new VVIPMinterContract();
