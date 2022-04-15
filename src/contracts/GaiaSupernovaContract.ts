import { BigNumber } from "ethers";
import Config from "../Config";
import GaiaNFTArtifact from "./abi/gaia-kronos/artifacts/contracts/GaiaNFT.sol/GaiaNFT.json";
import KIP17Contract from "./standard/KIP17Contract";

class GaiaSupernovaContract extends KIP17Contract {

    constructor() {
        super("0x89a18aBAB20aaB069feB7cab20517630Ee7C1626", GaiaNFTArtifact.abi);
    }

    public async totalSupply(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("totalSupply"));
    }
}

export default new GaiaSupernovaContract();
