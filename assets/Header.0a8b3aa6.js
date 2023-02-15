import { _ as _export_sfc, u as useGlobalStore } from "./index.6f7ee59a.js";
import { i as defineComponent, j as ref, aj as storeToRefs, a9 as onBeforeMount, r as resolveComponent, o as openBlock, c as createElementBlock, d as createBaseVNode, a as createVNode, w as withCtx, x as unref, F as Fragment, ab as renderList, v as normalizeClass, t as toDisplayString } from "./vendor.0e42ecf5.js";
var Header_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = { class: "header_container" };
const _hoisted_2 = { class: "header_content" };
const _hoisted_3 = { class: "logo" };
const _hoisted_4 = ["src"];
const _hoisted_5 = ["src"];
const _hoisted_6 = { class: "menu-wrapper" };
const _hoisted_7 = { class: "menu-item-link" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const navList = ref([]);
    const logo_img = ref([]);
    let store = useGlobalStore();
    let { headerShadowActive, headerShow, headerLogoShow, navDarkActive } = storeToRefs(store);
    logo_img.value = [
      {
        path: require("src/assets/img/index/logo.png")
      },
      {
        path: require("src/assets/img/index/logoColor.png")
      }
    ];
    onBeforeMount(() => {
      navList.value = [
        {
          title: "\u9996\u9875",
          path: "/index"
        },
        {
          title: "\u56E2\u961F\u4ECB\u7ECD",
          path: "/groupInfo"
        },
        {
          title: "\u65B0\u95FB\u4E2D\u5FC3",
          path: "/news"
        },
        {
          title: "\u6280\u672F\u4E0E\u4EA7\u54C1\u89C4\u5212",
          path: "/product"
        },
        {
          title: "\u4EBA\u624D\u62DB\u8058",
          path: "/job"
        }
      ];
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["header", { header_show: unref(headerShow), shadow: unref(headerShadowActive) }])
      }, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createVNode(_component_router_link, { to: "/" }, {
                default: withCtx(() => [
                  unref(headerLogoShow) ? (openBlock(), createElementBlock("img", {
                    key: 0,
                    src: logo_img.value[0].path,
                    alt: "logo"
                  }, null, 8, _hoisted_4)) : (openBlock(), createElementBlock("img", {
                    key: 1,
                    src: logo_img.value[1].path,
                    alt: "logo"
                  }, null, 8, _hoisted_5))
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_6, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(navList.value, (nav, index) => {
                return openBlock(), createElementBlock("div", {
                  class: "menu-item",
                  key: index
                }, [
                  createBaseVNode("h2", _hoisted_7, [
                    createVNode(_component_router_link, {
                      to: nav.path
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("span", {
                          class: normalizeClass({ a_text_dark: unref(navDarkActive) })
                        }, toDisplayString(nav.title), 3)
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ])
                ]);
              }), 128))
            ])
          ])
        ])
      ], 2);
    };
  }
});
var AwHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e361cd08"]]);
export { AwHeader as A };
//# sourceMappingURL=Header.0a8b3aa6.js.map
