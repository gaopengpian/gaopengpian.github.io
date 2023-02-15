var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { a2 as axios, i as defineComponent, j as ref, a9 as onBeforeMount, r as resolveComponent, o as openBlock, m as createBlock, w as withCtx, c as createElementBlock, F as Fragment, ab as renderList, d as createBaseVNode, t as toDisplayString, a as createVNode, q as createTextVNode, p as pushScopeId, b as popScopeId, ac as ElCard, k as onMounted, z as ElIcon, am as ElAutocomplete, an as ElTabPane, ao as ElPagination, ap as ElTabs, aq as ElDatePicker, ah as resolveDirective, x as unref, ar as search_default, as as createCommentVNode, ai as withDirectives } from "./vendor.0e42ecf5.js";
import "./async-vendor.c71a837d.js";
import { A as AwHeader } from "./Header.0a8b3aa6.js";
import { A as AwFooter } from "./Footer.97059a09.js";
import { _ as _export_sfc, u as useGlobalStore } from "./index.6f7ee59a.js";
var request = axios.create({
  timeout: 1e4,
  baseURL: "/api"
});
const searchNewsList = (queryString) => {
  return request.get("/v1/web/searchnews/" + queryString);
};
const getNewsList = (data) => {
  return request.get("/v1/web/newslist", { params: data });
};
const getRecomNewsApi = () => {
  return request.get("/v1/web/recomNews");
};
const getHotNewsApi = () => {
  return request.get("/v1/web/hotnews");
};
var HotNews_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$1 = (n) => (pushScopeId("data-v-ea7fd42c"), n = n(), popScopeId(), n);
const _hoisted_1$2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h3", { class: "hot-title" }, "\u70ED\u95E8\u65B0\u95FB", -1));
const _hoisted_2$2 = {
  key: 0,
  class: "hot-list"
};
const _hoisted_3$2 = { class: "num-top" };
const _hoisted_4$2 = { class: "hot-date" };
const _hoisted_5$1 = {
  key: 1,
  class: "is-null"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const hotNews = ref([]);
    onBeforeMount(() => {
      getHotNews();
    });
    function getHotNews() {
      return __async(this, null, function* () {
        const { data: res } = yield getHotNewsApi();
        if (res.status !== 200) {
          hotNews.value = [];
        } else {
          hotNews.value = res.data.list;
        }
      });
    }
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_el_card = ElCard;
      return openBlock(), createBlock(_component_el_card, { class: "hot-news" }, {
        default: withCtx(() => [
          _hoisted_1$2,
          hotNews.value.length !== 0 ? (openBlock(), createElementBlock("ul", _hoisted_2$2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(hotNews.value, (item, index2) => {
              return openBlock(), createElementBlock("li", {
                class: "hot-list-item",
                key: index2
              }, [
                createBaseVNode("span", _hoisted_3$2, toDisplayString(index2 + 1), 1),
                createBaseVNode("p", null, [
                  createVNode(_component_router_link, {
                    to: `/news/${item.news_path}`
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.news_title), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"]),
                  createBaseVNode("span", _hoisted_4$2, toDisplayString(item.publish_time), 1)
                ])
              ]);
            }), 128))
          ])) : (openBlock(), createElementBlock("span", _hoisted_5$1, "\u6682\u65E0\u6570\u636E"))
        ]),
        _: 1
      });
    };
  }
});
var HotNews = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ea7fd42c"]]);
var NewsList_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$1 = {
  key: 0,
  class: "news-list-items"
};
const _hoisted_2$1 = ["src"];
const _hoisted_3$1 = { class: "item-content" };
const _hoisted_4$1 = {
  key: 1,
  class: "is-null"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    useGlobalStore();
    ref(1);
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_el_card = ElCard;
      return openBlock(), createElementBlock("div", null, [
        __props.items !== void 0 ? (openBlock(), createElementBlock("ul", _hoisted_1$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item, index2) => {
            return openBlock(), createElementBlock("li", {
              class: "news-list-item",
              key: index2
            }, [
              createVNode(_component_el_card, { shadow: "hover" }, {
                default: withCtx(() => [
                  createVNode(_component_router_link, {
                    to: `/news/${item.news_path}`
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("img", {
                        src: item.cover_img,
                        alt: ""
                      }, null, 8, _hoisted_2$1),
                      createBaseVNode("div", _hoisted_3$1, [
                        createBaseVNode("h2", null, toDisplayString(item.news_title), 1),
                        createBaseVNode("p", null, toDisplayString(item.news_desc), 1),
                        createBaseVNode("span", null, toDisplayString(item.publish_time), 1)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ]),
                _: 2
              }, 1024)
            ]);
          }), 128))
        ])) : (openBlock(), createElementBlock("span", _hoisted_4$1, "\u6682\u65E0\u6570\u636E"))
      ]);
    };
  }
});
var NewsList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-600a506a"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var index_vue_vue_type_style_index_1_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-0a3a30ec"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "news" };
const _hoisted_2 = { class: "box" };
const _hoisted_3 = { class: "news-banner" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "banner-title" }, [
  /* @__PURE__ */ createBaseVNode("h2", null, "\u65B0\u89C6\u91CE"),
  /* @__PURE__ */ createBaseVNode("h3", null, "\u4E86\u89E3\u66F4\u591A\u65B0\u95FB")
], -1));
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = ["innerHTML"];
const _hoisted_7 = { class: "news-container" };
const _hoisted_8 = { class: "news-card" };
const _hoisted_9 = { class: "news-card-item" };
const _hoisted_10 = ["src"];
const _hoisted_11 = { class: "item-mask" };
const _hoisted_12 = { class: "news-list" };
const _hoisted_13 = { class: "list-right" };
const _hoisted_14 = { class: "search-by-date" };
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "\u6309\u65E5\u671F\u641C\u7D22\uFF1A", -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const headRef = ref();
    const newsTabs = ref([]);
    const newsItems = ref({});
    const pageInfo = ref({
      activeName: "1",
      pagenum: 1,
      pagesize: 10,
      selectDate: ""
    });
    const singlePage = ref(false);
    const recomNews = ref([]);
    ref("");
    const searchList = ref([]);
    const timeout = ref();
    const autocomplete = ref();
    const autocompleteFlag = ref(false);
    const hotNews = ref([]);
    const searchNews = ref();
    let mainStore = useGlobalStore();
    onBeforeMount(() => {
      newsTabs.value = [
        {
          id: "1",
          name: "\u6700\u65B0\u52A8\u6001"
        },
        {
          id: "2",
          name: "\u5178\u578B\u6848\u4F8B"
        },
        {
          id: "3",
          name: "\u901A\u77E5\u516C\u544A"
        }
      ];
      getNewsItems();
      getRecomNews();
    });
    onMounted(() => {
      mainStore.setHeaderLogo(false);
      mainStore.setShadowActive(false);
      mainStore.setNavDarkActive(true);
      mainStore.setHeaderShow(false);
    });
    function querySearchAsync(queryString, cb) {
      return __async(this, null, function* () {
        var _a, _b;
        searchList.value = [];
        const { data: res } = yield searchNewsList(queryString);
        searchList.value = (_b = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.list) != null ? _b : [];
        const newHtml = `<span style="color: #3370ff">${queryString}</span>`;
        searchList.value.forEach((item) => {
          item.news_title = item.news_title.replace(queryString, newHtml);
          item.news_desc = item.news_desc.replace(queryString, newHtml);
        });
        clearTimeout(timeout.value);
        timeout.value = setTimeout(() => {
          cb(searchList.value);
        }, 1e3 * Math.random());
      });
    }
    function searchHandle() {
      if (autocompleteFlag.value) {
        autocomplete.value.activated = true;
      }
    }
    function handleClick(tab, event) {
      getNewsItems();
    }
    function handleCurrentChange(val) {
      getNewsItems();
    }
    function getNewsItems() {
      return __async(this, null, function* () {
        const { data: res } = yield getNewsList(pageInfo.value);
        if (res.status !== 200) {
          newsItems.value = {};
        } else {
          newsItems.value = res.data;
          if (newsItems.value.total <= newsItems.value.limit) {
            singlePage.value = true;
          }
        }
      });
    }
    function searchByDate(data) {
      getNewsItems();
    }
    function getRecomNews() {
      return __async(this, null, function* () {
        const { data: res } = yield getRecomNewsApi();
        if (res.status !== 200) {
          hotNews.value = [];
        } else {
          recomNews.value = res.data.list;
        }
      });
    }
    return (_ctx, _cache) => {
      const _component_el_icon = ElIcon;
      const _component_router_link = resolveComponent("router-link");
      const _component_el_autocomplete = ElAutocomplete;
      const _component_el_card = ElCard;
      const _component_el_tab_pane = ElTabPane;
      const _component_el_pagination = ElPagination;
      const _component_el_tabs = ElTabs;
      const _component_el_date_picker = ElDatePicker;
      const _directive_scroll_to = resolveDirective("scroll-to");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(AwHeader, {
          class: "news_header",
          ref_key: "headRef",
          ref: headRef
        }, null, 512),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            _hoisted_4,
            createVNode(_component_el_autocomplete, {
              class: "search-input",
              "popper-class": "my-autocomplete",
              "highlight-first-item": "",
              modelValue: searchNews.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchNews.value = $event),
              clearable: "",
              ref_key: "autocomplete",
              ref: autocomplete,
              onFocus: _cache[1] || (_cache[1] = ($event) => autocompleteFlag.value = true),
              onBlur: _cache[2] || (_cache[2] = ($event) => autocompleteFlag.value = false),
              onClear: searchHandle,
              "fetch-suggestions": querySearchAsync,
              placeholder: "\u8BF7\u8F93\u5165\u65B0\u95FB\u5173\u952E\u8BCD",
              "trigger-on-focus": false
            }, {
              prefix: withCtx(() => [
                createVNode(_component_el_icon, null, {
                  default: withCtx(() => [
                    createVNode(unref(search_default))
                  ]),
                  _: 1
                })
              ]),
              default: withCtx(({ item }) => [
                createVNode(_component_router_link, {
                  to: item.news_path,
                  target: "_blank"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", {
                      class: "name",
                      innerHTML: item.news_title
                    }, null, 8, _hoisted_5),
                    createBaseVNode("span", {
                      class: "desc",
                      innerHTML: item.news_desc
                    }, null, 8, _hoisted_6)
                  ]),
                  _: 2
                }, 1032, ["to"])
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(recomNews.value, (item, index2) => {
                return openBlock(), createBlock(_component_el_card, {
                  shadow: "never",
                  key: index2
                }, {
                  default: withCtx(() => [
                    createVNode(_component_router_link, {
                      to: `/news/${item.news_path}`
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_9, [
                          createBaseVNode("img", {
                            src: item.cover_img,
                            alt: ""
                          }, null, 8, _hoisted_10),
                          createBaseVNode("p", _hoisted_11, [
                            createBaseVNode("span", null, toDisplayString(item.news_title), 1)
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            createBaseVNode("div", _hoisted_12, [
              createVNode(_component_el_tabs, {
                class: "list-left",
                modelValue: pageInfo.value.activeName,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => pageInfo.value.activeName = $event),
                onTabClick: handleClick
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_tab_pane, {
                    label: newsTabs.value[0].name,
                    name: newsTabs.value[0].id
                  }, {
                    default: withCtx(() => [
                      pageInfo.value.activeName === newsTabs.value[0].id ? (openBlock(), createBlock(NewsList, {
                        key: 0,
                        items: newsItems.value.list
                      }, null, 8, ["items"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["label", "name"]),
                  createVNode(_component_el_tab_pane, {
                    label: newsTabs.value[1].name,
                    name: newsTabs.value[1].id
                  }, {
                    default: withCtx(() => [
                      pageInfo.value.activeName === newsTabs.value[1].id ? (openBlock(), createBlock(NewsList, {
                        key: 0,
                        items: newsItems.value.list
                      }, null, 8, ["items"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["label", "name"]),
                  createVNode(_component_el_tab_pane, {
                    label: newsTabs.value[2].name,
                    name: newsTabs.value[2].id
                  }, {
                    default: withCtx(() => [
                      pageInfo.value.activeName === newsTabs.value[2].id ? (openBlock(), createBlock(NewsList, {
                        key: 0,
                        items: newsItems.value.list
                      }, null, 8, ["items"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["label", "name"]),
                  withDirectives(createVNode(_component_el_pagination, {
                    class: "pagination",
                    background: "",
                    onCurrentChange: handleCurrentChange,
                    "current-page": pageInfo.value.pagenum,
                    "onUpdate:current-page": _cache[3] || (_cache[3] = ($event) => pageInfo.value.pagenum = $event),
                    "page-size": pageInfo.value.pagesize,
                    layout: "prev, pager, next, jumper",
                    total: newsItems.value.total,
                    "hide-on-single-page": singlePage.value
                  }, null, 8, ["current-page", "page-size", "total", "hide-on-single-page"]), [
                    [_directive_scroll_to, {
                      element: ".news-container",
                      duration: 300,
                      easing: "ease",
                      offset: -40
                    }]
                  ])
                ]),
                _: 1
              }, 8, ["modelValue"]),
              createBaseVNode("div", _hoisted_13, [
                createBaseVNode("div", _hoisted_14, [
                  _hoisted_15,
                  createVNode(_component_el_date_picker, {
                    modelValue: pageInfo.value.selectDate,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => pageInfo.value.selectDate = $event),
                    type: "month",
                    placeholder: "\u9009\u62E9\u65E5\u671F",
                    "value-format": "yyyy-MM",
                    onChange: _cache[6] || (_cache[6] = ($event) => searchByDate(pageInfo.value.selectDate))
                  }, null, 8, ["modelValue"])
                ]),
                createVNode(HotNews)
              ])
            ])
          ])
        ]),
        createVNode(AwFooter)
      ]);
    };
  }
});
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0a3a30ec"]]);
export { index as default };
//# sourceMappingURL=index.caec2851.js.map
