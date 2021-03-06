import { DomNode, el } from "skydapp-browser";
import { Debouncer, SkyUtil, View, ViewParams } from "skydapp-common";
import NftItem from "../component/NftItem";
import GaiaNFTContract from "../contracts/GaiaNFTContract";
import VVIPMinterContract from "../contracts/VVIPMinterContract";
// import GaiaNFTContract from "../contracts/GaiaNFTContract";
import Wallet from "../klaytn/Wallet";
import Layout from "./Layout";

export default class Home implements View {

    private container: DomNode;

    private status: DomNode;
    private nftList: DomNode;

    private tokenIds: number[] = [];

    private interval: any;

    constructor() {
        Layout.current.title = "Gaia Kronos Sale for VVIP";
        Layout.current.content.append(this.container = el(".home-view",
            el("h1", "Gaia Kronos Sale"),
            el("h2", "for VVIP"),
            el(".sale-container",
                el("h3", "sale NFT"),
                this.status = el("p", "..."),
            ),
            el("h4", "price: 1,000 KLAY"),
            this.nftList = el(".nft-container"),
        ));

        this.interval = setInterval(() => this.loadSales(), 1000);

        this.loadNFTsDebouncer.run();
        Wallet.on("connect", () => this.loadNFTsDebouncer.run());
    }

    private loadNFTsDebouncer: Debouncer = new Debouncer(200, () => this.loadNFTs());

    private async loadSales() {
        const step = (await VVIPMinterContract.step()).toNumber();
        if (step === 2) {
            this.status.empty().appendText("On Public Sale");
        } else if (step === 1) {
            this.status.empty().appendText("On Pre Sale");
        } else {
            this.status.empty().appendText("Not On Sale");
        }
    }

    private async loadNFTs(): Promise<void> {
        this.nftList.empty();

        const balance = (await GaiaNFTContract.balanceOf(VVIPMinterContract.address)).toNumber();
        if (balance === 0) {
            this.nftList.append(el("p.empty", "not on sale"));
        } else {
            const promises: Promise<void>[] = [];

            this.tokenIds = [];
            SkyUtil.repeat(balance, (i: number) => {
                const promise = async (index: number) => {
                    const item = new NftItem().appendTo(this.nftList);
                    const tokenId = (await GaiaNFTContract.tokenOfOwnerByIndex(VVIPMinterContract.address, index)).toNumber();
                    if (tokenId === 0) {
                        item.delete();
                    } else {
                        item.init(tokenId);
                        this.tokenIds.push(tokenId);
                    }
                };
                promises.push(promise(i));
            });
        }
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
