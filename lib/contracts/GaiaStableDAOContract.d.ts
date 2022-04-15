import { BigNumber } from "ethers";
import KIP17Contract from "./standard/KIP17Contract";
declare class GaiaStableDAOContract extends KIP17Contract {
    constructor();
    totalSupply(): Promise<BigNumber>;
}
declare const _default: GaiaStableDAOContract;
export default _default;
//# sourceMappingURL=GaiaStableDAOContract.d.ts.map