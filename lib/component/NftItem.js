"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const skydapp_browser_1 = require("skydapp-browser");
const CommonUtil_1 = __importDefault(require("../CommonUtil"));
const GaiaOperationContract_1 = __importDefault(require("../contracts/GaiaOperationContract"));
const VVIPMinterContract_1 = __importDefault(require("../contracts/VVIPMinterContract"));
const ViewUtil_1 = __importDefault(require("../view/ViewUtil"));
const Confirm_1 = __importDefault(require("./shared/dialogue/Confirm"));
class NftItem extends skydapp_browser_1.DomNode {
    constructor() {
        super(".nft-item");
        this.id = -1;
        this.krno = ethers_1.BigNumber.from(0);
        this.append(this.imageDisplay = (0, skydapp_browser_1.el)("img"), this.nameDisplay = (0, skydapp_browser_1.el)(".name"), this.krnoDisplay = (0, skydapp_browser_1.el)(".krno"), (0, skydapp_browser_1.el)("button", "BUY", {
            click: () => new Confirm_1.default("구매 확인", "1,000클레이로 구매합니다.", "구매", async () => {
                if (await VVIPMinterContract_1.default.mint(this.id) === true) {
                    ViewUtil_1.default.waitTransactionAndRefresh();
                }
            }),
        }));
    }
    async loadKRNO() {
        this.krno = await GaiaOperationContract_1.default.claimableKRNO([this.id]);
        this.krnoDisplay.empty().appendText(`${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatUnits(this.krno, 9))} KRNO`);
    }
    init(id) {
        this.id = id;
        this.imageDisplay.domElement.src = `https://storage.googleapis.com/gaia-protocol/kronos/${id}.png`;
        this.nameDisplay.appendText(`#${this.id}`);
        this.loadKRNO();
    }
    delete() {
        super.delete();
    }
}
exports.default = NftItem;
//# sourceMappingURL=NftItem.js.map