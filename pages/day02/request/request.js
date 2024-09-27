// pages/day02/request/request.js
Page({

  getRequest(){
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/api/get',
      method:'GET',
      data:{
        name: 'haha',
        age: 18
      },
      success:(res)=>{
        console.log(res.data)
      }
    })
  },
  postRequest(){
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/api/post',
      method:'POST',
      data:{
        name: 'haha',
        age: 18
      },
      success:(res)=>{
        console.log(res.data)
      }
    })
  },
  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    this.postRequest(),
    this.getRequest()
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})