import { i as defineComponent, j as ref, k as onMounted, ag as onUnmounted, ax as ElTree, ay as ElCheckbox, az as ElCheckboxGroup, r as resolveComponent, o as openBlock, c as createElementBlock, a as createVNode, d as createBaseVNode, w as withCtx, ai as withDirectives, aA as vShow, t as toDisplayString, F as Fragment, ab as renderList, p as pushScopeId, b as popScopeId, q as createTextVNode, x as unref } from "./vendor.0e42ecf5.js";
import "./async-vendor.c71a837d.js";
import { A as AwHeader } from "./Header.0a8b3aa6.js";
import { A as AwFooter } from "./Footer.97059a09.js";
import { _ as _export_sfc, u as useGlobalStore } from "./index.6f7ee59a.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var index_vue_vue_type_style_index_1_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-5f996592"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "job" };
const _hoisted_2 = { class: "box" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "banner" }, null, -1));
const _hoisted_4 = { class: "main" };
const _hoisted_5 = { class: "aside-filter" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "\u7B5B\u9009", -1));
const _hoisted_7 = { class: "job-category job-filter-block" };
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "title" }, "\u804C\u4F4D\u7C7B\u522B", -1));
const _hoisted_9 = { class: "city-category job-filter-block" };
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "title" }, "\u57CE\u5E02", -1));
const _hoisted_11 = { class: "content" };
const _hoisted_12 = { class: "content-list" };
const _hoisted_13 = { class: "title" };
const _hoisted_14 = { class: "subTitle" };
const _hoisted_15 = { class: "city" };
const _hoisted_16 = /* @__PURE__ */ createTextVNode("\xA0| ");
const _hoisted_17 = { class: "job_category" };
const _hoisted_18 = { class: "desc" };
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "\u5B66\u5386\u4E13\u4E1A\u8981\u6C42\uFF1A", -1));
const _hoisted_20 = { class: "desc" };
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "\u804C\u4F4D\u8981\u6C42\uFF1A", -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    let mainStore = useGlobalStore();
    const jobCategory = ref();
    const store = useGlobalStore();
    const jobCategories = ref([
      {
        id: 100,
        name: "\u4EA7\u54C1",
        parent: null,
        children: [
          {
            id: 1,
            name: "\u9879\u76EE\u7ECF\u7406",
            parent: 2,
            children: null,
            depth: 2
          },
          {
            id: 2,
            name: "\u4EA7\u54C1\u7ECF\u7406",
            parent: 2,
            children: null,
            depth: 2
          }
        ],
        depth: 1
      },
      {
        id: 101,
        name: "\u7814\u53D1",
        parent: null,
        children: [
          {
            id: 3,
            name: "\u5E94\u7528\u5F00\u53D1",
            parent: 4,
            children: null,
            depth: 2
          }
        ],
        depth: 1
      },
      {
        id: 102,
        name: "\u7814\u7A76\u5458",
        parent: null,
        children: [
          {
            id: 4,
            name: "\u7535\u529B\u7814\u7A76\u5458",
            parent: 4,
            children: null,
            depth: 2
          }
        ],
        depth: 1
      },
      { id: 103, name: "\u884C\u653F", parent: null, children: [], depth: 1 }
    ]);
    let checkedJobId = [];
    const jobCategoryProps = ref({
      children: "children",
      label: "name"
    });
    const jobCities = ["\u6210\u90FD", "\u5317\u4EAC", "\u4E0A\u6D77"];
    const checkedCities = ref([]);
    const jobDetail = [
      {
        id: 1,
        name: "\u9879\u76EE\u7ECF\u7406",
        city: "\u6210\u90FD",
        salary: "16-30W/\u5E74\uFF08\u542B\u8865\u8D34\uFF09",
        eduDemand: "\u7855\u58EB\u53CA\u4EE5\u4E0A\u5B66\u5386\uFF0C\u535A\u58EB\u4F18\u5148; \u7535\u6C14\u5DE5\u7A0B\u3001\u81EA\u52A8\u5316\u3001\u80FD\u6E90\u5DE5\u7A0B\u7B49\u76F8\u5173\u4E13\u4E1A\u3002",
        ability: "\u5177\u6709\u7535\u529B\u548C\u7EFC\u5408\u80FD\u6E90\u7CFB\u7EDF\u4EFF\u771F\u5206\u6790\u3001\u8FD0\u884C\u8C03\u63A7\u7B49\u76F8\u5173\u9886\u57DF\u5B9E\u4E60\u7ECF\u9A8C\u6216\u7814\u7A76\u8005\u4F18\u5148\u3002"
      },
      {
        id: 2,
        name: "\u4EA7\u54C1\u7ECF\u7406",
        city: "\u5317\u4EAC",
        salary: "16-30W/\u5E74\uFF08\u542B\u8865\u8D34\uFF09",
        eduDemand: "\u7855\u58EB\u53CA\u4EE5\u4E0A\u5B66\u5386\uFF0C\u535A\u58EB\u4F18\u5148; \u7535\u6C14\u5DE5\u7A0B\u3001\u81EA\u52A8\u5316\u3001\u80FD\u6E90\u5DE5\u7A0B\u7B49\u76F8\u5173\u4E13\u4E1A\u3002",
        ability: "\u5177\u5907\u8F83\u5F3A\u7684\u6C9F\u901A\u534F\u8C03\u80FD\u529B\uFF1B\u5177\u5907\u4EA7\u54C1\u539F\u578B\u8BBE\u8BA1\u7ECF\u9A8C\uFF1B\u5BF9\u4EA7\u54C1\u8BBE\u8BA1\u6709\u6D53\u539A\u7684\u5174\u8DA3\uFF0C\u5BF9\u4EBA\u673A\u4EA4\u4E92\u8BBE\u8BA1\u6709\u8F83\u591A\u7684\u5173\u6CE8\u3002"
      },
      {
        id: 3,
        name: "\u7814\u53D1\u5DE5\u7A0B\u5E08",
        city: "\u6210\u90FD",
        salary: "16-30W/\u5E74\uFF08\u542B\u8865\u8D34\uFF09",
        eduDemand: "\u672C\u79D1\u53CA\u4EE5\u4E0A\u5B66\u5386; \u7535\u6C14\u5DE5\u7A0B\u3001\u8BA1\u7B97\u673A\u3001\u81EA\u52A8\u5316\u3001\u8F6F\u4EF6\u5DE5\u7A0B\u7B49\u76F8\u5173\u4E13\u4E1A\u3002",
        ability: "\u5177\u6709\u72EC\u7ACB\u89E3\u51B3\u95EE\u9898\u7684\u80FD\u529B\uFF0C\u6709\u826F\u597D\u7684\u6C9F\u901A\u80FD\u529B\u548C\u56E2\u961F\u534F\u4F5C\u7CBE\u795E\uFF0C\u719F\u6089C/C++/python/matlab\u7B49\u7F16\u7A0B\u8BED\u8A00\u3002"
      },
      {
        id: 4,
        name: "\u7535\u529B\u7814\u7A76\u5458",
        city: "\u4E0A\u6D77",
        salary: "16-30W/\u5E74\uFF08\u542B\u8865\u8D34\uFF09",
        eduDemand: "\u7855\u58EB\u53CA\u4EE5\u4E0A\u5B66\u5386\uFF0C\u535A\u58EB\u4F18\u5148; \u7535\u6C14\u5DE5\u7A0B\u3001\u81EA\u52A8\u5316\u3001\u80FD\u6E90\u5DE5\u7A0B\u7B49\u76F8\u5173\u4E13\u4E1A\u3002",
        ability: "\u5177\u6709\u7535\u529B\u548C\u7EFC\u5408\u80FD\u6E90\u7CFB\u7EDF\u4EFF\u771F\u5206\u6790\u3001\u8FD0\u884C\u8C03\u63A7\u7B49\u76F8\u5173\u9886\u57DF\u5B9E\u4E60\u7ECF\u9A8C\u6216\u7814\u7A76\u8005\u4F18\u5148\u3002"
      }
    ];
    ref({
      total: 0,
      job_post_list: [],
      limit: 0
    });
    ref(false);
    ref({
      label: "name"
    });
    ref(false);
    ref(false);
    const scrollTop = ref(0);
    const oldScrollTop = ref(0);
    const filteredJobList = ref([]);
    onMounted(() => {
      mainStore.setHeaderLogo(false);
      mainStore.setShadowActive(true);
      mainStore.setNavDarkActive(true);
      mainStore.setHeaderShow(false);
      window.addEventListener("scroll", scrollHandle);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", scrollHandle);
    });
    function scrollHandle() {
      scrollTop.value = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      oldScrollTop.value = scrollTop.value;
      if (scrollTop.value >= 330) {
        mainStore.setHeaderShow(true);
      } else {
        mainStore.setHeaderShow(false);
      }
    }
    function clearFilter() {
      jobCategory.value.setCheckedKeys([], false);
      checkedCities.value = [];
      checkedJobId = [];
      refreshJobList();
    }
    function jobCategoryChange(value, state) {
      checkedJobId = state.checkedKeys.filter((itemId) => itemId < 100);
      refreshJobList();
    }
    function refreshJobList() {
      filteredJobList.value = jobDetail.filter((cityItem) => checkedJobId.includes(cityItem.id) && (checkedCities.value.length === 0 || checkedCities.value.includes(cityItem.city)));
    }
    return (_ctx, _cache) => {
      const _component_el_tree = ElTree;
      const _component_el_checkbox = ElCheckbox;
      const _component_el_checkbox_group = ElCheckboxGroup;
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(AwHeader, {
          class: "job_header",
          ref: "jobRef"
        }, null, 512),
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", { class: "aside-header" }, [
                _hoisted_6,
                createBaseVNode("span", {
                  class: "clear clearable",
                  onClick: clearFilter
                }, "\u6E05\u7A7A")
              ]),
              createBaseVNode("div", _hoisted_7, [
                _hoisted_8,
                createVNode(_component_el_tree, {
                  ref_key: "jobCategory",
                  ref: jobCategory,
                  data: jobCategories.value,
                  props: jobCategoryProps.value,
                  "node-key": "id",
                  "check-on-click-node": "",
                  onCheck: jobCategoryChange,
                  "show-checkbox": ""
                }, null, 8, ["data", "props"])
              ]),
              createBaseVNode("div", _hoisted_9, [
                _hoisted_10,
                createVNode(_component_el_checkbox_group, {
                  modelValue: checkedCities.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => checkedCities.value = $event),
                  onChange: refreshJobList
                }, {
                  default: withCtx(() => [
                    (openBlock(), createElementBlock(Fragment, null, renderList(jobCities, (city) => {
                      return createVNode(_component_el_checkbox, {
                        label: city,
                        key: city
                      }, null, 8, ["label"]);
                    }), 64))
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ]),
            createBaseVNode("div", _hoisted_11, [
              withDirectives(createBaseVNode("h2", { class: "content-title" }, "\u804C\u4F4D\u5217\u8868 (" + toDisplayString(filteredJobList.value.length) + ")", 513), [
                [vShow, filteredJobList.value.length > 0]
              ]),
              createBaseVNode("ul", _hoisted_12, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(filteredJobList.value, (item) => {
                  return openBlock(), createElementBlock("li", {
                    class: "content-item is-hover-shadow",
                    key: item.id
                  }, [
                    createVNode(_component_router_link, {
                      to: `/job/${item.id}`,
                      class: "noUnderline",
                      onClick: ($event) => unref(store).setJobInfo(item)
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("h3", _hoisted_13, toDisplayString(item.name), 1),
                        createBaseVNode("div", _hoisted_14, [
                          createBaseVNode("span", _hoisted_15, toDisplayString(item.city), 1),
                          _hoisted_16,
                          createBaseVNode("span", _hoisted_17, toDisplayString(item.salary), 1)
                        ]),
                        createBaseVNode("p", _hoisted_18, [
                          _hoisted_19,
                          createTextVNode(" " + toDisplayString(item.eduDemand), 1)
                        ]),
                        createBaseVNode("p", _hoisted_20, [
                          _hoisted_21,
                          createTextVNode(" " + toDisplayString(item.ability), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["to", "onClick"])
                  ]);
                }), 128))
              ])
            ])
          ])
        ]),
        createVNode(AwFooter)
      ]);
    };
  }
});
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5f996592"]]);
export { index as default };
//# sourceMappingURL=index.c316e290.js.map
