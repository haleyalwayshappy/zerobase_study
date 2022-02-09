import CategoryTabList from "./category-tab-list.js";
import Header from "./header.js";
import MenuDetail from "./menu-detail.js";
import MenuList from "./menu-list.js";
import MenuPictureList from "./menu-picture-list.js";
import OrderTypeList from "./order-type-list.js";
import RecentMenuList from "./recent-menu-list.js";
import ReviewList from "./review-list.js";
import TabList from "./tab-list.js";
import OrderSummary from "./order-summary.js";
import OrderSelectList from "./order-select-list.js";
import OptionPopup from "./option-popup.js";
import ToppingBaseOptionGroup from "./topping-base-option-group.js";
import ToppingSelectOptionGroup from "./topping-select-option-group.js";
import ToppingAmountOptionGroup from "./topping-amount-option-group.js";
import AccordionList from "./accordionList.js";

customElements.define("naver-order-header", Header);
customElements.define("tab-list", TabList);
customElements.define("recent-menu-list", RecentMenuList);
customElements.define("menu-list", MenuList);
customElements.define("category-tab-list", CategoryTabList);
customElements.define("order-type-list", OrderTypeList);
customElements.define("menu-detail", MenuDetail);
customElements.define("menu-picture-list", MenuPictureList);
customElements.define("review-list", ReviewList);
customElements.define("order-summary", OrderSummary);
customElements.define("order-select-list", OrderSelectList);
customElements.define("option-popup", OptionPopup);
customElements.define("accordion-list", AccordionList);

customElements.define("topping-base-option-group", ToppingBaseOptionGroup);
customElements.define("topping-select-option-group", ToppingSelectOptionGroup);
customElements.define("topping-amount-option-group", ToppingAmountOptionGroup);