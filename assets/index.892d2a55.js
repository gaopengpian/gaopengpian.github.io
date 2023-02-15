import { i as defineComponent, k as onMounted, aB as ElButton, o as openBlock, c as createElementBlock, a as createVNode, d as createBaseVNode, t as toDisplayString, x as unref, w as withCtx, F as Fragment, q as createTextVNode, p as pushScopeId, b as popScopeId } from "./vendor.0e42ecf5.js";
import { A as AwHeader } from "./Header.0a8b3aa6.js";
import { A as AwFooter } from "./Footer.97059a09.js";
import { _ as _export_sfc, u as useGlobalStore } from "./index.6f7ee59a.js";
import "./async-vendor.c71a837d.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-01e9c246"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "mainContent" };
const _hoisted_2 = { class: "title" };
const _hoisted_3 = { class: "subTitle" };
const _hoisted_4 = { class: "city" };
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\xA0| ");
const _hoisted_6 = { class: "job_category" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h4", { class: "deTitle" }, "\u5B66\u5386\u4E13\u4E1A\u8981\u6C42", -1));
const _hoisted_8 = { class: "desc" };
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h4", { class: "deTitle" }, "\u804C\u4F4D\u8981\u6C42", -1));
const _hoisted_10 = { class: "desc" };
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u6295\u9012");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const mainStore = useGlobalStore();
    onMounted(() => {
      mainStore.setHeaderLogo(false);
      mainStore.setShadowActive(true);
      mainStore.setNavDarkActive(true);
      mainStore.setHeaderShow(false);
    });
    return (_ctx, _cache) => {
      const _component_el_button = ElButton;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(AwHeader, {
          class: "job_header",
          ref: "jobRef"
        }, null, 512),
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("h2", _hoisted_2, toDisplayString(unref(mainStore).jobInfo.name), 1),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("span", _hoisted_4, toDisplayString(unref(mainStore).jobInfo.city), 1),
            _hoisted_5,
            createBaseVNode("span", _hoisted_6, toDisplayString(unref(mainStore).jobInfo.salary), 1)
          ]),
          _hoisted_7,
          createBaseVNode("p", _hoisted_8, toDisplayString(unref(mainStore).jobInfo.eduDemand), 1),
          _hoisted_9,
          createBaseVNode("p", _hoisted_10, toDisplayString(unref(mainStore).jobInfo.ability), 1),
          createVNode(_component_el_button, {
            type: "primary",
            class: "subBt",
            round: ""
          }, {
            default: withCtx(() => [
              _hoisted_11
            ]),
            _: 1
          })
        ]),
        createVNode(AwFooter)
      ], 64);
    };
  }
});
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-01e9c246"]]);
export { index as default };
//# sourceMappingURL=index.892d2a55.js.map
