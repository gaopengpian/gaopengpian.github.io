import { A as AwHeader } from "./Header.0a8b3aa6.js";
import { A as AwFooter } from "./Footer.97059a09.js";
import { _ as _export_sfc, u as useGlobalStore } from "./index.6f7ee59a.js";
import { o as openBlock, c as createElementBlock, p as pushScopeId, b as popScopeId, d as createBaseVNode, i as defineComponent, j as ref, a9 as onBeforeMount, aa as ElProgress, t as toDisplayString, F as Fragment, ab as renderList, a as createVNode, w as withCtx, ac as ElCard, ad as ElCarouselItem, ae as ElCarousel, m as createBlock, af as createStaticVNode, k as onMounted, ag as onUnmounted, ah as resolveDirective, v as normalizeClass, ai as withDirectives } from "./vendor.0e42ecf5.js";
import "./async-vendor.c71a837d.js";
var OverLayText_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$4 = {};
const _withScopeId$2 = (n) => (pushScopeId("data-v-d73e3236"), n = n(), popScopeId(), n);
const _hoisted_1$4 = { class: "overlay" };
const _hoisted_2$4 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "overlay-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "slogan sofiaBold" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "slogan-title" }, "\u914D\u7535\u7F51\u4E0E\u65B0\u80FD\u6E90\u80FD\u91CF\u7BA1\u7406\u4E0E\u63A7\u5236\u7814\u7A76\u6240"),
    /* @__PURE__ */ createBaseVNode("div", { class: "slogan-subtitle" }, "\u6E05\u534E\u56DB\u5DDD\u80FD\u6E90\u4E92\u8054\u7F51\u7814\u7A76\u9662")
  ])
], -1));
const _hoisted_3$3 = [
  _hoisted_2$4
];
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$4, _hoisted_3$3);
}
var OverLay = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$1], ["__scopeId", "data-v-d73e3236"]]);
var IndexService_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$1 = (n) => (pushScopeId("data-v-352a35fd"), n = n(), popScopeId(), n);
const _hoisted_1$3 = { class: "wrap-block" };
const _hoisted_2$3 = { class: "content-blok service-idea" };
const _hoisted_3$2 = { class: "service-idea" };
const _hoisted_4$1 = { class: "idea-left" };
const _hoisted_5$1 = ["src", "alt"];
const _hoisted_6 = { class: "idea-right" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "block-line" }, null, -1));
const _hoisted_8 = { class: "idea-title" };
const _hoisted_9 = { class: "idea-desc" };
const _hoisted_10 = { class: "content-blok service-block" };
const _hoisted_11 = { class: "servie-block" };
const _hoisted_12 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "block-line" }, null, -1));
const _hoisted_13 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", { class: "service-info-title" }, "\u7814\u7A76\u9886\u57DF", -1));
const _hoisted_14 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", { class: "service-info-subtitle" }, "\u7814\u7A76\u6240\u805A\u7126\u7814\u7A76\u914D\u7535\u7F51\u4E0E\u65B0\u80FD\u6E90\u5728\u7EFC\u5408\u89C4\u5212\u3001\u8C03\u5EA6\u4E0E\u8FD0\u884C\u63A7\u5236\u7B49\u9886\u57DF\u7684\u5173\u952E\u6280\u672F\u653B\u5173", -1));
const _hoisted_15 = { class: "service-list" };
const _hoisted_16 = { class: "is-hover-shadow" };
const _hoisted_17 = { class: "service-title-shadow" };
const _hoisted_18 = ["src"];
const _hoisted_19 = { class: "service-name" };
const _hoisted_20 = { class: "content-blok service-case" };
const _hoisted_21 = { class: "service-case" };
const _hoisted_22 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "block-line" }, null, -1));
const _hoisted_23 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", { class: "case-title" }, "\u7814\u7A76\u6210\u679C", -1));
const _hoisted_24 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", { class: "case-subtitle" }, "\u7814\u7A76\u6240\u805A\u7126\u4E8E\u914D\u7535\u7F51\u4E0E\u65B0\u80FD\u6E90\u667A\u6167\u5316\u7684\u521B\u65B0\u4EA7\u54C1\u5F00\u53D1\u548C\u5E02\u573A\u5E94\u7528\u63A8\u5E7F", -1));
const _hoisted_25 = { class: "case-list" };
const _hoisted_26 = ["src", "alt"];
const _hoisted_27 = { class: "case-desc" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const serviceList = ref([]);
    const serviceIdeaInfo = ref({
      ideaTitle: "\u7814\u7A76\u6240\u4ECB\u7ECD",
      ideaDesc: "\u914D\u7535\u7F51\u4E0E\u65B0\u80FD\u6E90\u80FD\u91CF\u7BA1\u7406\u4E0E\u8C03\u63A7\u7814\u7A76\u6240\u662F\u7531\u6E05\u534E\u5927\u5B66\u7535\u673A\u7CFB\u8C03\u5EA6\u81EA\u52A8\u5316\u5B9E\u9A8C\u5BA4\u7275\u5934\u7EC4\u5EFA\uFF0C\u56E2\u961F\u7531IEEE Fellow\u9886\u8854\uFF0C\u62E5\u670940\u4F59\u5E74\u7535\u529B\u7CFB\u7EDF\u81EA\u52A8\u5316\u3001\u667A\u80FD\u5316\u8C03\u5EA6\u548C\u8FD0\u884C\u63A7\u5236\u7406\u8BBA\u7814\u7A76\u57FA\u7840\u548C\u5DE5\u7A0B\u5B9E\u65BD\u7ECF\u9A8C\uFF0C\u5177\u6709\u96C4\u539A\u7684\u79D1\u7814\u5B9E\u529B\u548C\u5B66\u672F\u80CC\u666F\u3002\u7814\u7A76\u6240\u805A\u7126\u914D\u7535\u7F51\u4E0E\u65B0\u80FD\u6E90\u667A\u6167\u5316\u89C4\u5212\u3001\u8C03\u5EA6\u4EE5\u53CA\u8FD0\u884C\u63A7\u5236\u5168\u8FC7\u7A0B\u521B\u65B0\u4EA7\u54C1\u7684\u5F00\u53D1\u4E0E\u5E02\u573A\u5E94\u7528\u63A8\u5E7F\uFF0C\u627F\u62C5\u4E86\u591A\u9879\u56FD\u5BB6\u7EA7\u79D1\u6280\u9879\u76EE\uFF0C\u5E76\u4E0E\u56FD\u5BB6\u7535\u7F51\u516C\u53F8\u3001\u5357\u65B9\u7535\u7F51\u516C\u53F8\u7B49\u591A\u5BB6\u884C\u4E1A\u9F99\u5934\u4F01\u4E1A\u8FBE\u6210\u4E86\u826F\u597D\u5408\u4F5C\u5173\u7CFB\uFF0C\u6784\u5EFA\u4E86\u4E16\u754C\u9886\u5148\u7684\u914D\u7535\u7F51\u4E0E\u65B0\u80FD\u6E90\u80FD\u91CF\u7BA1\u7406\u7CFB\u7EDF\u548C\u8FD0\u884C\u63A7\u5236\u88C5\u5907\u5E73\u53F0\uFF0C\u5177\u6709\u826F\u597D\u7684\u53D1\u5C55\u524D\u666F\u548C\u5E02\u573A\u9884\u671F\u3002"
    });
    const serviceIdeaImg = ref([]);
    const caseList = ref([]);
    ref("50");
    onBeforeMount(() => {
      serviceList.value = [
        {
          description: "\u4E3B\u52A8\u914D\u7535\u80FD\u91CF\u7BA1\u7406\u4E0E\u7EFC\u5408\u4F18\u5316\u89C4\u5212",
          path: require("src/assets/img/index/bigData.webp")
        },
        {
          description: "\u65B0\u80FD\u6E90/\u5206\u5E03\u5F0F\u8D44\u6E90\u96C6\u7FA4\u81EA\u5F8B\u63A7\u5236\u4E0E\u534F\u8C03\u8C03\u5EA6\u6280\u672F",
          path: require("src/assets/img/index/media.webp")
        },
        {
          description: "\u98CE\u9669\u91CF\u5316\u7684\u7535\u529B\u7CFB\u7EDF\u6982\u7387\u4F18\u5316\u8C03\u5EA6",
          path: require("src/assets/img/index/internet.webp")
        },
        {
          description: "\u4E00\u4F53\u5316\u878D\u5408\u5206\u6563\u5F0F\u7EA7\u8054\u591A\u7535\u5E73\u50A8\u80FD\u6280\u672F",
          path: require("src/assets/img/index/cloud.webp")
        }
      ];
      serviceIdeaImg.value = [
        {
          name: "lefImg",
          path: require("src/assets/img/index/introduct.png")
        },
        {
          name: "rightImg",
          path: require("src/assets/img/index/service2.png")
        }
      ];
      caseList.value = [
        {
          desc: "\u9762\u5411\u57CE\u4E61\u914D\u7535\u7F51\u7684\u667A\u80FD\u5206\u6790\u51B3\u7B56\u7CFB\u7EDF",
          path: require("src/assets/img/index/app1.png")
        },
        {
          desc: "\u5206\u5E03\u5F0F\u5149\u4F0F\u96C6\u7FA4\u7FA4\u63A7\u7FA4\u8C03\u7CFB\u7EDF",
          path: require("src/assets/img/index/app2.png")
        },
        {
          desc: "\u9762\u5411\u5206\u5E03\u5F0F\u8D44\u6E90\u7684\u865A\u62DF\u7535\u5382\u5B50\u7AD9\u3001\u8C03\u63A7\u4E3B\u7AD9\u548C\u5E02\u573A\u4EA4\u6613\u7CFB\u7EDF",
          path: require("src/assets/img/index/app3.png")
        },
        {
          desc: "\u8003\u8651\u53EF\u9760\u6027\u7EA6\u675F\u548C\u4E00/\u4E8C\u6B21\u534F\u540C\u7684\u4E3B\u52A8\u914D\u7535\u7F51\u667A\u80FD\u89C4\u5212\u7CFB\u7EDF",
          path: require("src/assets/img/index/app4.png")
        },
        {
          desc: "\u9762\u5411\u9AD8\u6BD4\u4F8B\u65B0\u80FD\u6E90\u7535\u529B\u7CFB\u7EDF\u7684\u7A33\u5B9A\u8BC4\u4F30\u3001\u98CE\u9669\u8C03\u5EA6\u548C\u5B89\u5168\u63A7\u5236\u7CFB\u7EDF",
          path: require("src/assets/img/index/app5.png")
        },
        {
          desc: "\u63D0\u4F9B\u7535\u7F51\u4E3B\u52A8\u652F\u6491\u80FD\u529B\u7684\u98CE\u5149\u50A8\u7535\u7AD9/\u96C6\u7FA4\u52A8\u6001\u63A7\u5236\u7CFB\u7EDF",
          path: require("src/assets/img/index/app6.png")
        }
      ];
    });
    return (_ctx, _cache) => {
      const _component_el_card = ElCard;
      const _component_el_progress = ElProgress;
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$3, [
          createBaseVNode("div", _hoisted_3$2, [
            createBaseVNode("div", _hoisted_4$1, [
              createBaseVNode("img", {
                src: serviceIdeaImg.value[0].path,
                alt: serviceIdeaImg.value[0].name
              }, null, 8, _hoisted_5$1)
            ]),
            createBaseVNode("div", _hoisted_6, [
              _hoisted_7,
              createBaseVNode("p", _hoisted_8, toDisplayString(serviceIdeaInfo.value.ideaTitle), 1),
              createBaseVNode("p", _hoisted_9, toDisplayString(serviceIdeaInfo.value.ideaDesc), 1)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_10, [
          createBaseVNode("div", _hoisted_11, [
            _hoisted_12,
            _hoisted_13,
            _hoisted_14,
            createBaseVNode("div", _hoisted_15, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(serviceList.value, (item, index2) => {
                return openBlock(), createElementBlock("div", {
                  class: "service-title",
                  key: index2
                }, [
                  createBaseVNode("div", _hoisted_16, [
                    createBaseVNode("div", _hoisted_17, [
                      createBaseVNode("div", null, [
                        createBaseVNode("img", {
                          src: item.path,
                          alt: ""
                        }, null, 8, _hoisted_18)
                      ])
                    ])
                  ]),
                  createBaseVNode("p", _hoisted_19, toDisplayString(item.description), 1)
                ]);
              }), 128))
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_20, [
          createBaseVNode("div", _hoisted_21, [
            _hoisted_22,
            _hoisted_23,
            _hoisted_24,
            createBaseVNode("div", _hoisted_25, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(caseList.value, (item, index2) => {
                return openBlock(), createElementBlock("div", {
                  class: "case-info",
                  key: index2
                }, [
                  createVNode(_component_el_card, {
                    "body-style": { padding: "0px", width: "100% " },
                    shadow: "hover"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("img", {
                        src: item.path,
                        alt: item.desc
                      }, null, 8, _hoisted_26)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_el_progress, {
                    percentage: 100,
                    "show-text": false
                  }),
                  createBaseVNode("p", _hoisted_27, toDisplayString(item.desc), 1)
                ]);
              }), 128))
            ])
          ])
        ])
      ]);
    };
  }
});
var IndexService = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-352a35fd"]]);
var Banner_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-6e738aa2"), n = n(), popScopeId(), n);
const _hoisted_1$2 = { class: "banner" };
const _hoisted_2$2 = { class: "Limit" };
const _hoisted_3$1 = { class: "img_con" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "img_cover" }, null, -1));
const _hoisted_5 = ["src"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    bannerHeight: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    const imgList = ref([]);
    onBeforeMount(() => {
      imgList.value = [
        {
          id: 0,
          imgUrl: "http://cdn.jsdelivr.net/gh/hugeminnow/sourceForCDN@1.0/20210604161353.jpg"
        },
        {
          id: 1,
          imgUrl: "http://cdn.jsdelivr.net/gh/hugeminnow/sourceForCDN@1.0/20210604161737.jpg"
        },
        {
          id: 2,
          imgUrl: "http://cdn.jsdelivr.net/gh/hugeminnow/sourceForCDN@1.0/20210604161757.png"
        },
        {
          id: 3,
          imgUrl: "http://cdn.jsdelivr.net/gh/hugeminnow/sourceForCDN@1.0/20210604161818.jpg"
        },
        {
          id: 4,
          imgUrl: "http://cdn.jsdelivr.net/gh/hugeminnow/sourceForCDN@1.0/20210604161834.jpg"
        }
      ];
    });
    return (_ctx, _cache) => {
      const _component_el_carousel_item = ElCarouselItem;
      const _component_el_carousel = ElCarousel;
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, [
          createVNode(_component_el_carousel, {
            interval: 3e3,
            arrow: "hover",
            height: __props.bannerHeight + "px",
            autoplay: true,
            ref: "carousel",
            trigger: "click",
            "indicator-position": "none"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(imgList.value, (item) => {
                return openBlock(), createBlock(_component_el_carousel_item, {
                  key: item.id
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_3$1, [
                      _hoisted_4,
                      createBaseVNode("img", {
                        class: "element-img",
                        alt: "",
                        src: item.imgUrl
                      }, null, 8, _hoisted_5)
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          }, 8, ["height"])
        ])
      ]);
    };
  }
});
var Banner = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6e738aa2"]]);
var ScrollHint_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = {};
const _hoisted_1$1 = {
  class: "scroll-hint-con scroll-anchor-wrapper",
  style: { "max-height": "100vh" }
};
const _hoisted_2$1 = /* @__PURE__ */ createStaticVNode('<div class="scroll-anchor fixed" data-v-8f4733fa><div class="scroll-anchor-ink" data-v-8f4733fa><span class="scroll-anchor-ink-ball" style="top:0;height:30px;" data-v-8f4733fa></span></div><div class="scroll-hint scroll-anchor-link" data-v-8f4733fa><a class="scroll-anchor-link-title" title="" data-v-8f4733fa><svg class="arrow-down_svg__icon" viewBox="0 0 1024 1024" width="200" height="200" data-v-8f4733fa><path d="M486.969 1014.101l-.683-.625-306.745-315.279a34.133 34.133 0 0 1 0-47.616l3.015-3.072a34.133 34.133 0 0 1 48.242-.682l.683.682 238.478 245.078-.057-858.454A34.133 34.133 0 0 1 504.036 0h3.3a34.133 34.133 0 0 1 34.132 34.133v870.97l250.653-257.594a34.133 34.133 0 0 1 48.242-.682l.682.682 3.015 3.072a34.133 34.133 0 0 1 0 47.616l-306.744 315.279a34.076 34.076 0 0 1-26.909 10.24h-2.105a34.02 34.02 0 0 1-21.333-9.615z" data-v-8f4733fa></path></svg></a></div></div>', 1);
const _hoisted_3 = [
  _hoisted_2$1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, _hoisted_3);
}
var ScrollHint = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-8f4733fa"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = { class: "index" };
const _hoisted_2 = { class: "banner-wrap" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const index_header = ref("");
    const BannerHeight = ref(0);
    const scrollTop = ref(0);
    let store = useGlobalStore();
    onMounted(() => {
      store.setHeaderLogo(true);
      store.setShadowActive(false);
      store.setNavDarkActive(false);
      window.addEventListener("resize", setBannerHeight);
      setBannerHeight();
      window.addEventListener("scroll", scrollHandle);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", setBannerHeight);
      window.removeEventListener("scroll", scrollHandle);
    });
    function setBannerHeight() {
      BannerHeight.value = window.innerHeight;
      store.setBannerHeight(BannerHeight.value);
    }
    function scrollHandle() {
      scrollTop.value = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      console.log("scrollTop.value", scrollTop.value, BannerHeight.value);
      if (scrollTop.value >= 10) {
        store.setHeaderShow(true);
      } else {
        store.setHeaderShow(false);
      }
    }
    return (_ctx, _cache) => {
      const _directive_scroll_to = resolveDirective("scroll-to");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(AwHeader, {
          class: normalizeClass(index_header.value)
        }, null, 8, ["class"]),
        createBaseVNode("div", _hoisted_2, [
          createVNode(Banner, { "banner-height": BannerHeight.value }, null, 8, ["banner-height"]),
          createVNode(OverLay),
          withDirectives(createVNode(ScrollHint, null, null, 512), [
            [_directive_scroll_to, { element: ".wrap-block", duration: 300, easing: "ease", offset: 1 }]
          ])
        ]),
        createVNode(IndexService),
        createVNode(AwFooter)
      ]);
    };
  }
});
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-877ca3b0"]]);
export { index as default };
//# sourceMappingURL=index.86d65c7b.js.map
