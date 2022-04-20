"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const skydapp_common_1 = require("skydapp-common");
const NftItem_1 = __importDefault(require("../component/NftItem"));
const GaiaNFTContract_1 = __importDefault(require("../contracts/GaiaNFTContract"));
const VVIPMinterContract_1 = __importDefault(require("../contracts/VVIPMinterContract"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const Layout_1 = __importDefault(require("./Layout"));
class Home {
    constructor() {
        this.tokenIds = [];
        this.loadNFTsDebouncer = new skydapp_common_1.Debouncer(200, () => this.loadNFTs());
        Layout_1.default.current.title = "Gaia Kronos Sale for VVIP";
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".home-view", (0, skydapp_browser_1.el)("h1", "Gaia Kronos Sale"), (0, skydapp_browser_1.el)("h2", "for VVIP"), (0, skydapp_browser_1.el)("h3", "sale NFT"), (0, skydapp_browser_1.el)("h4", "price: 1,000 KLAY"), this.status = (0, skydapp_browser_1.el)("p", "..."), this.nftList = (0, skydapp_browser_1.el)(".nft-container")));
        this.interval = setInterval(() => this.loadSales(), 1000);
        this.loadNFTsDebouncer.run();
        Wallet_1.default.on("connect", () => this.loadNFTsDebouncer.run());
    }
    async loadSales() {
        const step = (await VVIPMinterContract_1.default.step()).toNumber();
        if (step === 2) {
            this.status.empty().appendText("status: 퍼블릭 세일 중입니다.");
        }
        else if (step === 1) {
            this.status.empty().appendText("status: 프리세일 중입니다.");
        }
        else {
            this.status.empty().appendText("status: 아직 판매중이 아닙니다.");
        }
    }
    async loadNFTs() {
        this.nftList.empty();
        const balance = (await GaiaNFTContract_1.default.balanceOf(VVIPMinterContract_1.default.address)).toNumber();
        if (balance === 0) {
            this.nftList.append((0, skydapp_browser_1.el)("p.empty", "not on sale"));
        }
        else {
            const promises = [];
            this.tokenIds = [];
            skydapp_common_1.SkyUtil.repeat(balance, (i) => {
                const promise = async (index) => {
                    const item = new NftItem_1.default().appendTo(this.nftList);
                    const tokenId = (await GaiaNFTContract_1.default.tokenOfOwnerByIndex(VVIPMinterContract_1.default.address, index)).toNumber();
                    if (tokenId === 0) {
                        item.delete();
                    }
                    else {
                        item.init(tokenId);
                        this.tokenIds.push(tokenId);
                    }
                };
                promises.push(promise(i));
            });
        }
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map