export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};
export function render(oldRender) {
  //外挂的数据样式
  // window.g_app.model({
  //   namespace: 'focusListOne',
  //   ...require('@/pages/DocloudOther/FocusList1/xmodels/focusListOne').default,
  // });

  // window.g_app.model({
  //   namespace: "focusListOTwo",
  //   ...require("@/pages/DocloudOther/FocusList2/xmodels/focusListTwo")
  //     .default
  // })

  // window.g_app.model({
  //   namespace: "focusListThree",
  //   ...require("@/pages/DocloudOther/FocusList2/xmodels/focusListOne")
  //     .default
  // })

  // window.g_app.model({
  //   namespace: "focusListFour",
  //   ...require("@/pages/DocloudOther/FocusList2/xmodels/focusListOne")
  //     .default
  // })
  oldRender();
}
