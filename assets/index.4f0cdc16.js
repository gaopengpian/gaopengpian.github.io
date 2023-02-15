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
import { i as defineComponent, j as ref, at as computed, au as watch, a9 as onBeforeMount, k as onMounted, av as onBeforeUnmount, o as openBlock, c as createElementBlock, a as createVNode, d as createBaseVNode, F as Fragment, ab as renderList, aw as Transition, w as withCtx, v as normalizeClass, x as unref, t as toDisplayString, as as createCommentVNode } from "./vendor.0e42ecf5.js";
import { A as AwHeader } from "./Header.0a8b3aa6.js";
import { _ as _export_sfc, u as useGlobalStore } from "./index.6f7ee59a.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = { class: "product" };
const _hoisted_2 = { class: "product-fullpage-indicator" };
const _hoisted_3 = ["onClick"];
const _hoisted_4 = ["src"];
const _hoisted_5 = { class: "content" };
const _hoisted_6 = { class: "logo" };
const _hoisted_7 = ["src"];
const _hoisted_8 = { class: "description" };
const _hoisted_9 = { class: "proPicDiv" };
const _hoisted_10 = ["src"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const loading = ref(false);
    const products = ref([
      {
        id: 1,
        product_logo: "http://xanadu.aerowang.cn/server/static/upload/20211023/16349525552508088.png",
        product_name: "keleji",
        product_title: "\u4E3B\u52A8\u914D\u7535\u80FD\u91CF\u7BA1\u7406\u4E0E\u7EFC\u5408\u4F18\u5316\u89C4\u5212",
        product_desc: "\u4E3B\u8981\u7814\u53D1\u5185\u5BB9\uFF1A",
        product_sub_desc: [
          "\u4E3B\u52A8\u914D\u7535\u7F51\u80FD\u91CF\u7BA1\u7406\u4E0E\u7F51\u7EDC\u5206\u6790\u5173\u952E\u6280\u672F",
          "\u8F93\u914D\u534F\u540C\u7684\u4E3B\u52A8\u914D\u7535\u7F51\u5B89\u5168\u8BC4\u4F30\u4E0E\u4F18\u5316\u8C03\u63A7\u5173\u952E\u6280\u672F",
          "\u4E3B\u52A8\u914D\u7535\u7F51\u53EF\u9760\u6027\u7EA6\u675F\u7684\u7EFC\u5408\u89C4\u5212\u6280\u672F",
          "\u4E3B\u52A8\u914D\u7535\u7F51\u8FD0\u884C\u8C03\u63A7\u4E0E\u89C4\u5212\u7684\u7CFB\u5217\u5E94\u7528\u7CFB\u7EDF\u7814\u5236\u53CA\u5E94\u7528"
        ],
        product_link: "http://localhost:8080",
        proPic: require("src/assets/img/product/product1.png")
      },
      {
        id: 2,
        product_logo: "http://xanadu.aerowang.cn/server/static/upload/20211023/16349525773084251.png",
        product_name: "secai",
        product_title: "\u65B0\u80FD\u6E90/\u5206\u5E03\u5F0F\u8D44\u6E90\u96C6\u7FA4\u81EA\u5F8B\u63A7\u5236\u4E0E\u534F\u8C03\u8C03\u5EA6\u6280\u672F",
        product_desc: "\u4E3B\u8981\u7814\u53D1\u5185\u5BB9:",
        product_sub_desc: [
          "\u8003\u8651\u4E0D\u786E\u5B9A\u6027\u7684\u65B0\u80FD\u6E90\u573A\u7AD9\u52A8\u6001\u8C03\u8282\u80FD\u529B\u805A\u5408\u4E0E\u7B49\u503C\u8BC4\u4F30\u6280\u672F",
          "\u57FA\u4E8E\u5347\u7EF4\u6620\u5C04\u548C\u52A8\u6001\u6A21\u6001\u5206\u89E3\u7684\u65B0\u80FD\u6E90\u573A\u7AD9\u52A8\u6001\u534F\u8C03\u63A7\u5236\u6280\u672F",
          "\u65B0\u80FD\u6E90\u6C47\u96C6\u533A\u7684\u5206\u5E03\u5F0F\u534F\u8C03\u4F18\u5316\u6280\u672F",
          "\u805A\u5408\u5206\u5E03\u5F0F\u8D44\u6E90\u7684\u865A\u62DF\u7535\u5382\u7684\u52A8\u6001\u7B49\u503C\u4E0E\u7ADE\u4EF7\u6280\u672F",
          "\u805A\u5408\u5206\u5E03\u5F0F\u8D44\u6E90\u7684\u865A\u62DF\u7535\u5382\u81EA\u5F8B\u63A7\u5236\u6280\u672F",
          "\u865A\u62DF\u7535\u5382\u4E0E\u4E3B\u52A8\u914D\u7535\u7F51\u534F\u8C03\u4F18\u5316\u8C03\u5EA6\u6280\u672F",
          "\u9762\u5411\u98CE\u5149\u50A8\u65B0\u80FD\u6E90\u7535\u7AD9/\u865A\u62DF\u7535\u5382\u7684\u80FD\u91CF\u7BA1\u7406\u4E0E\u52A8\u6001\u63A7\u5236\u7CFB\u7EDF\u3001\u5E73\u53F0\u53CA\u88C5\u7F6E\u7684\u7814\u5236\u53CA\u5E94\u7528"
        ],
        product_link: "http://localhost:8080",
        proPic: require("src/assets/img/product/product2.png")
      },
      {
        id: 3,
        product_logo: "http://xanadu.aerowang.cn/server/static/upload/20211023/16349526049044918.png",
        product_name: "tell",
        product_title: "\u98CE\u9669\u91CF\u5316\u7684\u7535\u529B\u7CFB\u7EDF\u6982\u7387\u4F18\u5316\u8C03\u5EA6",
        product_desc: "\u4E3B\u8981\u7814\u53D1\u5185\u5BB9\uFF1A",
        product_sub_desc: [
          "\u98CE\u9669\u91CF\u5316\u7684\u65E5\u524D-\u65E5\u5185-\u5B9E\u65F6\u6982\u7387\u8C03\u5EA6\u6280\u672F",
          "\u98CE\u9669\u91CF\u5316\u7684\u6982\u7387\u673A\u7EC4\u7EC4\u5408\u6280\u672F",
          "\u591A\u7EA7\u591A\u63A7\u5236\u4E2D\u5FC3\u5206\u89E3\u534F\u540C\u4F18\u5316\u8C03\u5EA6\u6280\u672F",
          "\u65B0\u80FD\u6E90\u7535\u7AD9\u52A8\u6001\u63A7\u5236\u80FD\u529B\u7684\u534F\u8C03\u4F18\u5316\u6280\u672F",
          "\u98CE\u9669\u91CF\u5316\u7684\u7535\u529B\u7CFB\u7EDF\u591A\u65F6\u95F4\u5C3A\u5EA6\u6982\u7387\u8C03\u5EA6\u7CFB\u7EDF\u7814\u53D1\u53CA\u5E94\u7528"
        ],
        product_link: "http://localhost:8080",
        proPic: require("src/assets/img/product/product3.png")
      },
      {
        id: 4,
        product_logo: "http://xanadu.aerowang.cn/server/static/upload/20211023/16349526216955216.png",
        product_name: "keleji",
        product_title: "\u4E00\u4F53\u5316\u878D\u5408\u5206\u6563\u5F0F\u7EA7\u8054\u591A\u7535\u5E73\u50A8\u80FD\u6280\u672F",
        product_desc: "\u4E3B\u8981\u7814\u53D1\u5185\u5BB9\uFF1A",
        product_sub_desc: [
          "\u7535\u6C60\u3001BMS\u3001PCS\u4E00\u4F53\u5316\u878D\u5408\u7684\u50A8\u80FD\u6280\u672F",
          "\u5B89\u5168\u9AD8\u6548\u7684\u76F4\u6302\u5F0F\u7EA7\u8054\u591A\u7535\u5E73\u63A7\u5236\u548C\u4FDD\u62A4\u6280\u672F",
          "\u652F\u6301\u5206\u6563\u5F0F\u7EA7\u8054\u6D77\u91CF\u6570\u636E\u7684\u9AD8\u901F\u5B9E\u65F6\u901A\u4FE1\u6280\u672F",
          "\u667A\u80FD\u5316\u7684\u7535\u6C60\u5065\u5EB7\u5EA6\u3001\u98CE\u9669\u9884\u6D4B\u6280\u672F",
          "\u652F\u6301\u5206\u5E03\u5F0F\u5E76\u7F51\u7684\u591A\u673A\u5E76\u8054\u8C10\u632F\u6291\u5236\u6280\u672F",
          "\u652F\u6301\u865A\u62DF\u540C\u6B65\u53D1\u7535\u673A\u7684\u5206\u5E03\u5F0F\u53D1\u7535\u6280\u672F"
        ],
        product_link: "http://localhost:8080",
        proPic: require("src/assets/img/product/product4.png")
      }
    ]);
    const activeIndex = ref(0);
    const transitionName = ref("");
    const scrolling = ref(false);
    const duration = ref(1e3);
    const curItem = computed(() => products.value[activeIndex.value] || {});
    let mainStore = useGlobalStore();
    watch(() => activeIndex.value, (newIndex, oldIndex) => {
      if (scrolling.value) {
        return;
      }
      transitionName.value = newIndex < oldIndex ? "move-down" : "move-up";
    });
    onBeforeMount(() => __async(this, null, function* () {
      mainStore.setHeaderLogo(false);
      mainStore.setShadowActive(false);
      mainStore.setNavDarkActive(true);
      mainStore.setHeaderShow(false);
      loading.value = false;
    }));
    function mousewheelHandler(e) {
      if (scrolling.value) {
        return;
      }
      scrolling.value = true;
      if (e.wheelDelta > 0 || e.detail < 0) {
        transitionName.value = "move-down";
        activeIndex.value = activeIndex.value === 0 ? products.value.length - 1 : activeIndex.value - 1;
      } else {
        transitionName.value = "move-up";
        activeIndex.value = (activeIndex.value + 1) % products.value.length;
      }
      setTimeout(() => {
        scrolling.value = false;
      }, duration.value);
    }
    onMounted(() => {
      window.addEventListener("wheel", mousewheelHandler);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("wheel", mousewheelHandler);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(AwHeader, { class: "product_header" }),
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("ul", _hoisted_2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(products.value, (item, index2) => {
              return openBlock(), createElementBlock("li", {
                key: item.id,
                class: normalizeClass(["product-fullpage-indicator-item", { active: activeIndex.value === index2 }]),
                onClick: ($event) => activeIndex.value = index2
              }, [
                createBaseVNode("img", {
                  src: item.product_logo,
                  alt: "\u4EA7\u54C1 logo"
                }, null, 8, _hoisted_4)
              ], 10, _hoisted_3);
            }), 128))
          ]),
          createVNode(Transition, {
            duration: duration.value,
            name: transitionName.value
          }, {
            default: withCtx(() => [
              !loading.value ? (openBlock(), createElementBlock("div", {
                key: activeIndex.value,
                class: "view-wrapper"
              }, [
                createBaseVNode("div", _hoisted_5, [
                  createBaseVNode("div", _hoisted_6, [
                    createBaseVNode("img", {
                      src: unref(curItem).product_logo,
                      class: "wh100",
                      alt: ""
                    }, null, 8, _hoisted_7)
                  ]),
                  createBaseVNode("h1", null, toDisplayString(unref(curItem).product_title), 1),
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("p", null, toDisplayString(unref(curItem).product_desc), 1),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(curItem).product_sub_desc, (desItem, index2) => {
                      return openBlock(), createElementBlock("p", { key: index2 }, toDisplayString(desItem), 1);
                    }), 128))
                  ])
                ]),
                createBaseVNode("div", _hoisted_9, [
                  createBaseVNode("img", {
                    src: unref(curItem).proPic
                  }, null, 8, _hoisted_10)
                ])
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["duration", "name"])
        ])
      ]);
    };
  }
});
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e245da0e"]]);
export { index as default };
//# sourceMappingURL=index.4f0cdc16.js.map
