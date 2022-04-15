import { BigNumber, utils } from "ethers";
import { DomNode, el } from "skydapp-browser";
import CommonUtil from "../CommonUtil";
import GaiaOperationContract from "../contracts/GaiaOperationContract";
import VVIPMinterContract from "../contracts/VVIPMinterContract";
// import GaiaOperationContract from "../contracts/GaiaOperationContract";
import ViewUtil from "../view/ViewUtil";
import Confirm from "./shared/dialogue/Confirm";

export default class NftItem extends DomNode {

    private imageDisplay: DomNode<HTMLImageElement>;
    private nameDisplay: DomNode;
    private krnoDisplay: DomNode;

    private id = -1;
    private krno = BigNumber.from(0);

    constructor() {
        super(".nft-item");
        this.append(
            this.imageDisplay = el("img"),
            this.nameDisplay = el(".name"),
            this.krnoDisplay = el(".krno"),
            el("button", "BUY", {
                click: () => new Confirm("구매 확인", "1,000클레이로 구매합니다.", "구매", async () => {
                    await VVIPMinterContract.mint(this.id);
                    ViewUtil.waitTransactionAndRefresh();
                }),
            }),
        );
    }

    private async loadKRNO(): Promise<void> {
        this.krno = await GaiaOperationContract.claimableKRNO([this.id]);
        this.krnoDisplay.empty().appendText(`${CommonUtil.numberWithCommas(utils.formatUnits(this.krno, 9))} KRNO`);
    }

    public init(id: number) {
        this.id = id;
        this.imageDisplay.domElement.src = `https://storage.googleapis.com/gaia-protocol/kronos/${id}.png`;
        this.nameDisplay.appendText(`#${this.id}`);
        this.loadKRNO();
    }

    public delete() {
        super.delete();
    }
}
