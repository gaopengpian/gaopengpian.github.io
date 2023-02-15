import { i as defineComponent, j as ref, k as onMounted, r as resolveComponent, ak as ElPopover, o as openBlock, c as createElementBlock, d as createBaseVNode, a as createVNode, w as withCtx, F as Fragment, ab as renderList, t as toDisplayString, v as normalizeClass, al as normalizeStyle, p as pushScopeId, b as popScopeId, q as createTextVNode } from "./vendor.0e42ecf5.js";
import "./async-vendor.c71a837d.js";
import { _ as _export_sfc } from "./index.6f7ee59a.js";
var Footer_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-2abf07c2"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "footer_content" };
const _hoisted_2 = { class: "footer_logo footer-content-column" };
const _hoisted_3 = { class: "logo-container" };
const _hoisted_4 = ["src"];
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "logo-text" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "text1" }, "Xanadu"),
  /* @__PURE__ */ createBaseVNode("p", { class: "text2" }, "INTERNET COMPANY")
], -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", null, "\xA9 2020-2021 Xanadu\xA0\u79D1\u6280\u6709\u9650\u516C\u53F8", -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", null, "X\u516C\u7F51\u5B89\u5907 xxxxxxxxxxxxxx\u53F7 I ICP\u5907xxxxxxxx\u53F7-1", -1));
const _hoisted_8 = { class: "about_us footer-content-column" };
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", null, "\u5173\u4E8E\u6211\u4EEC", -1));
const _hoisted_10 = { class: "about_list" };
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u4F01\u4E1A\u6587\u5316");
const _hoisted_12 = { class: "contact_us footer-content-column" };
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", null, "\u8054\u7CFB\u6211\u4EEC", -1));
const _hoisted_14 = { class: "contact_list" };
const _hoisted_15 = ["href"];
const _hoisted_16 = { class: "focus_us footer-content-column" };
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", null, "\u5B9E\u65F6\u52A8\u6001\u4E0E\u62DB\u8058\u4FE1\u606F\uFF0C\u626B\u7801\u5173\u6CE8\u6211\u4EEC", -1));
const _hoisted_18 = { class: "media" };
const _hoisted_19 = { class: "qr_popover" };
const _hoisted_20 = ["src"];
const _hoisted_21 = ["src", "alt"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const footerHeight = ref("");
    ref("");
    const logo_url = ref();
    logo_url.value = require("../../assets/img/index/logoColor.png");
    const contact_way = ref([]);
    const focus_icon = ref([]);
    onMounted(() => {
      contact_way.value = [
        {
          name: "\u5A92\u4F53\u95EE\u8BE2",
          email: "aerowangue@126.com"
        },
        {
          name: "\u62DB\u8058\u76F8\u5173",
          email: "aerowangue@126.com"
        },
        {
          name: "\u5546\u52A1\u5408\u4F5C",
          email: "aerowangue@126.com"
        },
        {
          name: "\u5E7F\u544A\u76F8\u5173",
          email: "aerowangue@126.com"
        }
      ];
      focus_icon.value = [
        {
          name: "weibo",
          path: require("../../assets/img/focus/weibo.png"),
          qr: require("../../assets/img/focus/qr_weibo.png"),
          info: "\u5173\u6CE8\u5B98\u65B9\u5FAE\u535A"
        },
        {
          name: "weixin",
          path: require("../../assets/img/focus/weixin.svg"),
          qr: require("../../assets/img/focus/qr_weixin.png"),
          info: "\u5173\u6CE8\u5B98\u65B9\u5FAE\u4FE1\u516C\u4F17\u53F7"
        },
        {
          name: "bilibili",
          path: require("../../assets/img/focus/bilibili.png"),
          qr: require("../../assets/img/focus/qr_bilibili.png"),
          info: "\u5173\u6CE8\u5B98\u65B9 bilibili \u53F7"
        }
      ];
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_el_popover = ElPopover;
      return openBlock(), createElementBlock("div", {
        class: "footer_container",
        style: normalizeStyle(footerHeight.value + "px")
      }, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("img", {
                src: logo_url.value,
                alt: ""
              }, null, 8, _hoisted_4),
              _hoisted_5
            ]),
            _hoisted_6,
            _hoisted_7
          ]),
          createBaseVNode("div", _hoisted_8, [
            _hoisted_9,
            createBaseVNode("ul", _hoisted_10, [
              createBaseVNode("li", null, [
                createVNode(_component_router_link, {
                  to: "/job",
                  target: "_blank"
                }, {
                  default: withCtx(() => [
                    _hoisted_11
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_12, [
            _hoisted_13,
            createBaseVNode("ul", _hoisted_14, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(contact_way.value, (item, index) => {
                return openBlock(), createElementBlock("li", { key: index }, [
                  createBaseVNode("a", {
                    href: "mailto:" + item.email
                  }, toDisplayString(item.name), 9, _hoisted_15)
                ]);
              }), 128))
            ])
          ]),
          createBaseVNode("div", _hoisted_16, [
            _hoisted_17,
            createBaseVNode("div", _hoisted_18, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(focus_icon.value, (item, index) => {
                return openBlock(), createElementBlock("div", {
                  class: normalizeClass(item.name),
                  key: index
                }, [
                  createVNode(_component_el_popover, {
                    placement: "top",
                    trigger: "hover"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_19, [
                        createBaseVNode("img", {
                          src: item.qr,
                          alt: ""
                        }, null, 8, _hoisted_20),
                        createBaseVNode("h2", null, toDisplayString(item.info), 1)
                      ]),
                      createBaseVNode("img", {
                        src: item.path,
                        alt: item.name
                      }, null, 8, _hoisted_21)
                    ]),
                    _: 2
                  }, 1024)
                ], 2);
              }), 128))
            ])
          ])
        ])
      ], 4);
    };
  }
});
var AwFooter = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2abf07c2"]]);
export { AwFooter as A };
//# sourceMappingURL=Footer.97059a09.js.map
