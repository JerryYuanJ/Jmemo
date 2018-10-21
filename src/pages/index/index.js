const app = getApp()

Page({
  data: {
  },
  onLoad: function () {
    console.info(app.globalData.config)
  }
})
