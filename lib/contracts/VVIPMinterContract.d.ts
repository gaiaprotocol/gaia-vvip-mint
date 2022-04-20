import { BigNumber, BigNumberish } from "ethers";
import Contract from "./Contract";
declare class VVIPMinterContract extends Contract {
    constructor();
    price(): Promise<BigNumber>;
    step(): Promise<BigNumber>;
    v1Buyers(addr: string): Promise<boolean>;
    presaleBuyers(addr: string): Promise<boolean>;
    mint(id: BigNumberish): Promise<boolean>;
}
declare const _default: VVIPMinterContract;
export default _default;
//# sourceMappingURL=VVIPMinterContract.d.ts.map