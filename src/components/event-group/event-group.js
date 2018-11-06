// components/event-group/event-group.js
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    group: Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    checkboxChange(e) {
      console.log('checkbox发生change事件，携带value值为：', e.detail.value);
      let checkboxItems = this.data.group.events,
        values = e.detail.value
      for (let i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
        checkboxItems[i].checked = false;
        for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (checkboxItems[i].value == values[j]) {
            checkboxItems[i].checked = true;
            break;
          }
        }
      }
      this.setData({
        group: {
          label: this.data.group.label,
          events: checkboxItems
        }
      })
    }
  }
})