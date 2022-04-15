"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const MobileMenu_1 = __importDefault(require("../component/shared/menu/MobileMenu"));
const PCMenu_1 = __importDefault(require("../component/shared/menu/PCMenu"));
const UserInfo_1 = __importDefault(require("../component/shared/menu/UserInfo"));
class Layout {
    constructor() {
        Layout.current = this;
        let select;
        skydapp_browser_1.BodyNode.append((this.container = (0, skydapp_browser_1.el)(".layout", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)(".nav", (0, skydapp_browser_1.el)(".logo", (0, skydapp_browser_1.el)("a", { href: "/" }, (0, skydapp_browser_1.el)("img", { src: "/images/shared/logo/gaia-lounge.svg", alt: "gaia stable dao logo" }))), new PCMenu_1.default(), (0, skydapp_browser_1.el)(".right", new UserInfo_1.default(), (0, skydapp_browser_1.el)("a.menu-button", (0, skydapp_browser_1.el)("img", { src: "/images/shared/icn/menu.svg", alt: "menu" }), {
            click: (event, button) => {
                const rect = button.rect;
                new MobileMenu_1.default({ left: rect.right - 170, top: rect.bottom }).appendTo(skydapp_browser_1.BodyNode);
            },
        })))), (0, skydapp_browser_1.el)("main", (this.content = (0, skydapp_browser_1.el)(".content"))), (0, skydapp_browser_1.el)("footer", (0, skydapp_browser_1.el)(".footer-container", (0, skydapp_browser_1.el)(".sns", (0, skydapp_browser_1.el)("a.discord", { href: "https://discord.com/invite/SjM4meh3hd", target: "_blank" }, (0, skydapp_browser_1.el)("img", { src: "/images/shared/icn/discord.svg" })), (0, skydapp_browser_1.el)("a.twitter", { href: "https://twitter.com/gaia_protocol", target: "_blank" }, (0, skydapp_browser_1.el)("img", { src: "/images/shared/icn/twitter.svg" }))), (0, skydapp_browser_1.el)(".link-tree", (0, skydapp_browser_1.el)("a.kronos", "Gaia Kronos", { href: "https://app.gaiakronos.com/", target: "_blank" }), (0, skydapp_browser_1.el)(".hr"), (0, skydapp_browser_1.el)("a.supernova", "Gaia Supernova", { href: "https://app.gaiasupernova.com/", target: "_blank" }), (0, skydapp_browser_1.el)(".hr"), (0, skydapp_browser_1.el)("a.stableDAO", "Gaia Stable DAO", { href: "https://gaiastabledao.com/", target: "_blank" })), (0, skydapp_browser_1.el)(".copyright", "COPYRIGHT ⓒ Gaia Protocol. ALL RIGHTS RESERVED"))))));
    }
    set title(title) {
        document.title = `${title} | GAIA LOUNGE`;
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Layout;
//# sourceMappingURL=Layout.js.map