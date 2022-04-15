import { BigNumber } from "ethers";
import Config from "../Config";
import GaiaNFTArtifact from "./abi/gaia-kronos/artifacts/contracts/GaiaNFT.sol/GaiaNFT.json";
import KIP17Contract from "./standard/KIP17Contract";

class GaiaStableDAOContract extends KIP17Contract {

    constructor() {
        super("0xEccE87e11d057713665F020C5e206E18fCCBc8B7", GaiaNFTArtifact.abi);
    }

    public async totalSupply(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("totalSupply"));
    }
}

export default new GaiaStableDAOContract();
