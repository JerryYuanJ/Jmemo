Page({
  data: {
    memo: {
      label: '',
      date: '',
      remindMe: false,
      remindDate: '',
      remindTime: '',
      content: ''
    }
  },

  onLoad: function (options) {

  },
  onShareAppMessage: function () {

  },
  toggleRemind(){
    let tag = this.data.memo.remindMe
    this.setData({
      ['memo.remindMe']: !tag
    })
  },
  createMemo(){
    console.info(this.memo)
  }
})