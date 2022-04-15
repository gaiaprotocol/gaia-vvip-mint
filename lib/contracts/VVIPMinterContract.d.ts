import { BigNumber, BigNumberish } from "ethers";
import Contract from "./Contract";
declare class VVIPMinterContract extends Contract {
    constructor();
    price(): Promise<BigNumber>;
    mint(id: BigNumberish): Promise<void>;
}
declare const _default: VVIPMinterContract;
export default _default;
//# sourceMappingURL=VVIPMinterContract.d.ts.map