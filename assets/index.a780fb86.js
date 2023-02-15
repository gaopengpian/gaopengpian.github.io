import { _ as _export_sfc, u as useGlobalStore } from "./index.6f7ee59a.js";
import { A as AwHeader } from "./Header.0a8b3aa6.js";
import { A as AwFooter } from "./Footer.97059a09.js";
import { i as defineComponent, j as ref, a9 as onBeforeMount, k as onMounted, o as openBlock, c as createElementBlock, a as createVNode, d as createBaseVNode, F as Fragment, ab as renderList, p as pushScopeId, b as popScopeId, t as toDisplayString } from "./vendor.0e42ecf5.js";
import "./async-vendor.c71a837d.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-da29a32a"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "box" };
const _hoisted_2 = { class: "content-blok service-block" };
const _hoisted_3 = { class: "servie-block" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "service-info-title" }, "\u5B66\u672F\u5E26\u5934\u4EBA", -1));
const _hoisted_5 = { class: "service-list" };
const _hoisted_6 = { class: "is-hover-shadow" };
const _hoisted_7 = { class: "service-title-shadow" };
const _hoisted_8 = ["src"];
const _hoisted_9 = { class: "service-name" };
const _hoisted_10 = { class: "service-des" };
const _hoisted_11 = { class: "content-blok service-block" };
const _hoisted_12 = { class: "servie-block" };
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "service-info-title" }, "\u6280\u672F\u5E26\u5934\u4EBA", -1));
const _hoisted_14 = { class: "service-list" };
const _hoisted_15 = { class: "is-hover-shadow" };
const _hoisted_16 = { class: "service-title-shadow" };
const _hoisted_17 = ["src"];
const _hoisted_18 = { class: "service-name" };
const _hoisted_19 = { class: "service-des" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    let mainStore = useGlobalStore();
    const scholarList = ref([]);
    const techLeaderList = ref([]);
    onBeforeMount(() => {
      scholarList.value = [
        {
          name: "\u5B59\u5B8F\u658C",
          post: "\u7814\u7A76\u6240\u603B\u987E\u95EE",
          description: "\u6E05\u534E\u5927\u5B66\u7535\u673A\u7CFB\u6559\u6388\uFF0C\u535A\u5BFC\uFF0CIEEE Fellow\uFF0C\u957F\u6C5F\u5B66\u8005\u7279\u8058\u6559\u6388\uFF0C\u56FD\u5BB6\u6770\u51FA\u9752\u5E74\u57FA\u91D1\u83B7\u5F97\u8005\uFF0C\u56FD\u5BB6\u7EA7\u6559\u5B66\u540D\u5E08\u3002",
          path: require("src/assets/img/people/hongbin.png")
        },
        {
          name: "\u5F20\u4F2F\u660E",
          post: "\u7814\u7A76\u6240\u603B\u987E\u95EE",
          description: "\u6E05\u534E\u5927\u5B66\u7535\u673A\u7CFB\u6559\u6388\uFF0CIEEE Fellow\uFF0C973\u9996\u5E2D\u79D1\u5B66\u5BB6\uFF0CIEEE\u987E\u6BD3\u7407\u5956\u83B7\u5F97\u8005\u3002",
          path: require("src/assets/img/people/boming.png")
        },
        {
          name: "\u5434\u6587\u4F20",
          post: "\u7814\u7A76\u6240\u6240\u957F",
          description: "\u6E05\u534E\u5927\u5B66\u7535\u673A\u7CFB\u6559\u6388\uFF0CIEEE Fellow\uFF0C\u56FD\u5BB6\u6770\u51FA\u9752\u5E74\u57FA\u91D1\u83B7\u5F97\u8005\uFF0C\u56FD\u5BB6\u4E07\u4EBA\u8BA1\u5212\u79D1\u6280\u521B\u65B0\u9886\u519B\u4EBA\u624D\uFF0C\u56FD\u5BB6\u91CD\u70B9\u7814\u53D1\u8BA1\u5212\u5E2D\u79D1\u5B66\u5BB6\u3002",
          path: require("src/assets/img/people/wenchuan.png")
        }
      ];
      techLeaderList.value = [
        {
          name: "\u738B\u5F6C",
          post: "\u7814\u7A76\u6240\u526F\u6240\u957F",
          description: "\u6E05\u534E\u5927\u5B66\u535A\u58EB\uFF0C\u53C2\u4E0E\u627F\u62C5\u56FD\u5BB6\u81EA\u7136\u79D1\u5B66\u57FA\u91D1\u3001\u79D1\u6280\u90E8973/863/\u79D1\u6280\u652F\u6491\u8BA1\u5212/\u91CD\u70B9\u7814\u53D1\u8BA1\u5212\u3001\u56FD\u5BB6\u7535\u7F51\u516C\u53F8/\u5357\u65B9\u7535\u7F51\u516C\u53F8\u91CD\u70B9\u79D1\u6280\u9879\u76EE40\u4F59\u9879\uFF0C\u5148\u540E\u8363\u83B7\u56FD\u5BB6\u79D1\u6280\u8FDB\u6B65\u4E00\u7B49\u59561\u9879\u3001\u7701\u90E8\u7EA7\u4E00\u7B49\u59567\u9879\u3002",
          path: require("src/assets/img/people/wangbin.png")
        },
        {
          name: "\u5DE8\u4E91\u6D9B",
          post: "\u7814\u7A76\u6240\u526F\u6240\u957F",
          description: "\u6E05\u534E\u5927\u5B66\u535A\u58EB\uFF0C\u4E2D\u56FD\u519C\u4E1A\u5927\u5B66\u4FE1\u606F\u4E0E\u7535\u6C14\u5DE5\u7A0B\u5B66\u9662\u7535\u6C14\u5DE5\u7A0B\u7CFB\u526F\u7CFB\u4E3B\u4EFB\u3001\u6559\u6388\uFF0C\u80FD\u6E90\u4E92\u8054\u7F51\u4E13\u59D4\u4F1A\u59D4\u5458\uFF0C\u8FD0\u7B79\u5B66\u5B66\u4F1A\u9AD8\u7EA7\u4F1A\u5458\u3002\u66FE\u8363\u83B7\u4E2D\u56FD\u7535\u529B\u79D1\u5B66\u8FDB\u6B65\u4E00\u7B49\u5956\uFF0C\u56FD\u5BB6\u7535\u7F51\u516C\u53F8\u79D1\u6280\u8FDB\u6B65\u4E8C\u7B49\u5956\u3002",
          path: require("src/assets/img/people/yuntao.png")
        },
        {
          name: "\u51AF\u4E9A\u4E1C",
          post: "\u7814\u7A76\u6240\u526F\u6240\u957F",
          description: "\u535A\u58EB\uFF0C\u6B63\u9AD8\u7EA7\u5DE5\u7A0B\u5E08\uFF0C\u7535\u673A\u5DE5\u7A0B\u5B66\u4F1A\u9AD8\u7EA7\u4F1A\u5458\uFF0C\u73B0\u4EFB\u5357\u4EAC\u5408\u667A\u7535\u529B\u79D1\u6280\u6709\u9650\u516C\u53F8\u603B\u7ECF\u7406\u3002\u6C5F\u82CF\u7701\u6709\u7A81\u51FA\u8D21\u732E\u4E2D\u9752\u5E74\u4E13\u5BB6\uFF0C\u6C5F\u82CF\u7701\u201C333\u4EBA\u624D\u5DE5\u7A0B\u201D\u7B2C\u4E8C\u5C42\u6B21\u4EBA\u624D\u3002",
          path: require("src/assets/img/people/yadong.png")
        },
        {
          name: "\u5EB7\u6CF0\u5CF0",
          post: "\u7814\u7A76\u6240\u603B\u5DE5\uFF0C\u4EA7\u54C1\u90E8\u4E3B\u4EFB",
          description: "\u6E05\u534E\u5927\u5B66\u535A\u58EB\uFF0C\u66FE\u5C31\u804C\u4E8E\u963F\u5C14\u65AF\u901A\u3001\u57C3\u68EE\u54F2\u3001\u5317\u4EAC\u56DB\u65B9\u7EE7\u4FDD\u81EA\u52A8\u5316\u3001\u5317\u4EAC\u56FD\u7F51\u4FE1\u901A\u57C3\u68EE\u54F2\u7B49\u77E5\u540D\u4F01\u4E1A\uFF0C\u6307\u5BFC\u7684\u9752\u521B\u8D5B\u9879\u76EE\u66FE\u83B7\u56FD\u7F51\u5927\u6570\u636E\u5E94\u7528\u4E13\u4E1A\u91D1\u5956\u7B2C\u4E00\u540D\u3002",
          path: require("src/assets/img/people/taifeng.png")
        },
        {
          name: "\u738B\u6676",
          post: "\u6267\u884C\u526F\u6240\u957F\uFF0C\u9879\u76EE\u90E8\u4E3B\u4EFB",
          description: "\u9AD8\u7EA7\u5DE5\u7A0B\u5E08\uFF0C\u54C8\u5C14\u6EE8\u5DE5\u4E1A\u5927\u5B66\u7855\u58EB\uFF0C\u66FE\u83B7\u5F97\u56DB\u5DDD\u7535\u7F51\u79D1\u6280\u8FDB\u6B65\u4E00\u7B49\u5956\u3001\u4E2D\u56FD\u7535\u79D1\u9662\u79D1\u6280\u8FDB\u6B65\u4E00\u7B49\u5956\u7B49\u5956\u9879\u3002",
          path: require("src/assets/img/people/wangjin.png")
        },
        {
          name: "\u9AD8\u9E4F",
          post: "\u6240\u957F\u52A9\u7406\uFF0C\u7814\u53D1\u90E8\u4E3B\u4EFB",
          description: "\u9AD8\u7EA7\u5F00\u53D1\u5DE5\u7A0B\u5E08\uFF0C\u4E2D\u79D1\u9662\u7814\u7A76\u751F\u9662\u7855\u58EB\uFF0C\u5177\u6709\u4E30\u5BCC\u7535\u529B\u7CFB\u7EDF\u4E92\u8054\u7F51\u5E94\u7528\u5F00\u53D1\u7ECF\u9A8C\u3002",
          path: require("src/assets/img/people/gaopeng.png")
        }
      ];
    });
    onMounted(() => {
      mainStore.setHeaderLogo(false);
      mainStore.setShadowActive(true);
      mainStore.setNavDarkActive(true);
      mainStore.setHeaderShow(false);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(AwHeader, {
          class: "group_header",
          ref: "groupRef"
        }, null, 512),
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              _hoisted_4,
              createBaseVNode("div", _hoisted_5, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(scholarList.value, (item, index2) => {
                  return openBlock(), createElementBlock("div", {
                    class: "service-title",
                    key: index2
                  }, [
                    createBaseVNode("div", _hoisted_6, [
                      createBaseVNode("div", _hoisted_7, [
                        createBaseVNode("div", null, [
                          createBaseVNode("img", {
                            src: item.path,
                            alt: ""
                          }, null, 8, _hoisted_8)
                        ])
                      ])
                    ]),
                    createBaseVNode("p", _hoisted_9, toDisplayString(item.name) + " " + toDisplayString(item.post), 1),
                    createBaseVNode("p", _hoisted_10, toDisplayString(item.description), 1)
                  ]);
                }), 128))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("div", _hoisted_12, [
              _hoisted_13,
              createBaseVNode("div", _hoisted_14, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(techLeaderList.value, (item, index2) => {
                  return openBlock(), createElementBlock("div", {
                    class: "service-title",
                    key: index2
                  }, [
                    createBaseVNode("div", _hoisted_15, [
                      createBaseVNode("div", _hoisted_16, [
                        createBaseVNode("div", null, [
                          createBaseVNode("img", {
                            src: item.path,
                            alt: ""
                          }, null, 8, _hoisted_17)
                        ])
                      ])
                    ]),
                    createBaseVNode("p", _hoisted_18, toDisplayString(item.name) + " " + toDisplayString(item.post), 1),
                    createBaseVNode("p", _hoisted_19, toDisplayString(item.description), 1)
                  ]);
                }), 128))
              ])
            ])
          ])
        ]),
        createVNode(AwFooter)
      ], 64);
    };
  }
});
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-da29a32a"]]);
export { index as default };
//# sourceMappingURL=index.a780fb86.js.map
