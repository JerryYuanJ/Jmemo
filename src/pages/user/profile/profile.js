// src/pages/user/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  getUserInfo(user){
    console.info(user)
  },
  goLabels(){
    wx.navigateTo({
      url: '../../label/list/list',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})