const app = getApp()

Page({
  data: {
    brief: [{
      name: '工作',
      count: 4
    }, {
      name: '学习',
      count: 7
    }, {
      name: '备忘录',
      count: 9
    }],
    barAnimation: "",
    viewMode: "week",
    selectedDate: [{
      month: 'current',
      day: '1',
      color: 'white',
      background: 'lightblue'
    }]
  },
  animateMenu() {
    const ba = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease'
    })
    ba
      .translateY(30).step()
    this.setData({
      barAnimation: ba.export()
    })
  },
  animateMenuBack() {
    const ba = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease'
    })
    ba
      .rotate(0).step()
    this.setData({
      barAnimation: ba.export()
    })
  },
  onLoad: function() {
    console.info(app.globalData.config)
  },
  go(e) {
    const tag = e.currentTarget.id
    const self = this
    const modes = ['month', 'week', 'day']
    if (tag === 'add') {
      wx.navigateTo({
        url: '../create/create',
      })
    } else if (tag === 'user') {
      wx.navigateTo({
        url: '../user/profile/profile',
      })
    } else if (tag === 'mode') {
      wx.showActionSheet({
        itemList: ['按月查看', '按周查看', '今天'],
        success(res) {
          const index = res.tapIndex
          self.setData({
            viewMode: modes[index]
          })
          if (index === 0)
            self.animateMenu()
          else if (index === 2)
            self.animateMenuBack()
          else 
            self.animateMenuBack()
        }
      })
    }
  },
  goDetail() {
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  dayClick(e){
    console.info(e)
  }
})